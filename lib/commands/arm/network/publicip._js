var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var TagUtils = require('../tag/tagUtils');
var $ = utils.getLocaleString;

function Publicip(cli, networkResourceProviderClient) {
  this.cli = cli;
  this.networkResourceProviderClient = networkResourceProviderClient;
}

__.extend(Publicip.prototype, {
  create: function (resourceGroupName, name, params, _) {
    var publicipProfile = this._parseAndValidatePublicIP(name, params);
    var publicip = this.get(resourceGroupName, name, _);
    if (publicip) {
      throw new Error(util.format($('A public ip address with name "%s" already exists in the resource group "%s"'), name, resourceGroupName));
    }

    var progress = this.cli.interaction.progress(util.format($('Creating public ip address "%s"'), name));
    try {
      this.networkResourceProviderClient.publicIpAddresses.createOrUpdate(resourceGroupName, name, publicipProfile, _);
    } finally {
      progress.end();
    }
  },

  set: function (resourceGroupName, name, params, _) {
    var publicipProfile = this._parseAndValidatePublicIP(name, params);
    var publicip = this.get(resourceGroupName, name, _);
    if (!publicip) {
      throw new Error(util.format($('A public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroupName));
    }

    if (params.idletimeout) publicip.publicIpAddress.idleTimeoutInMinutes = publicipProfile.idleTimeoutInMinutes;
    if (params.allocationMethod) publicip.publicIpAddress.publicIpAllocationMethod = publicipProfile.publicIpAllocationMethod;
    if (params.domainNameLabel) publicip.publicIpAddress.dnsSettings.domainNameLabel = publicipProfile.dnsSettings.domainNameLabel;
    if (params.fqdn) publicip.publicIpAddress.dnsSettings.fqdn = publicipProfile.dnsSettings.fqdn;
    if (params.reverseFqdn) publicip.publicIpAddress.dnsSettings.reverseFqdn = publicipProfile.dnsSettings.reverseFqdn;

    this.update(resourceGroupName, name, publicip.publicIpAddress, _);
  },

  show: function (resourceGroupName, publicIpName, params, _) {
    var publicIP = this.get(resourceGroupName, publicIpName, _);
    var output = this.cli.output;
    var interaction = this.cli.interaction;

    if (publicIP) {
      interaction.formatOutput(publicIP.publicIpAddress, function () {
        utils.logLineFormat(publicIP.publicIpAddress, output.data);
      });
    } else {
      if (output.format().json) {
        output.json({});
      } else {
        output.warn(util.format($('A public ip address with name "%s" not found in the resource group "%s"'), publicIpName, resourceGroupName));
      }
    }
  },

  delete: function (resourceGroupName, publicIpName, params, _) {
    var publicIP = this.get(resourceGroupName, publicIpName, _);
    if (!publicIP) {
      throw new Error(util.format($('A public ip address with name "%s" not found in the resource group "%s"'), publicIpName, resourceGroupName));
    }

    if (!params.quiet && !this.cli.interaction.confirm(util.format($('Delete public ip address "%s"? [y/n] '), publicIpName), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Deleting public ip address "%s"'), publicIpName));
    try {
      this.networkResourceProviderClient.publicIpAddresses.deleteMethod(resourceGroupName, publicIpName, _);
    } finally {
      progress.end();
    }
  },

  list: function (resourceGroupName, params, _) {
    var progress = this.cli.interaction.progress($('Getting the public ip addresses'));
    var publicIPs = null;
    try {
      publicIPs = this.networkResourceProviderClient.publicIpAddresses.list(resourceGroupName, _);
    } finally {
      progress.end();
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(publicIPs.publicIpAddresses, function (outputData) {
      if (outputData.length === 0) {
        output.warn($('No public ip address found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
          row.cell($('Allocation'), item.publicIpAllocationMethod);
          row.cell($('IP Address'), item.ipAddress || '');
          row.cell($('Idle timeout'), item.idleTimeoutInMinutes || '');
          var dnsName = '';
          if (item.dnsSettings) {
            dnsName = item.dnsSettings.fqdn;
          }
          row.cell($('DNS Name'), dnsName);
        });
      }
    });
  },

  get: function (resourceGroupName, publicIpName, _) {
    var progress = this.cli.interaction.progress(util.format($('Looking up the public ip "%s"'), publicIpName));
    try {
      var publicIP = this.networkResourceProviderClient.publicIpAddresses.get(resourceGroupName, publicIpName, _);
      return publicIP;
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  update: function (resourceGroupName, publicIpName, publicIpProfile, _) {
    var progress = this.cli.interaction.progress(util.format($('Updating public ip address "%s"'), publicIpName));
    try {
      this.networkResourceProviderClient.publicIpAddresses.createOrUpdate(resourceGroupName, publicIpName, publicIpProfile, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
  },

  _parseAndValidatePublicIP: function (name, params) {
    var supportedAllocationTypes = ['Dynamic', 'Static'];
    var self = this;

    var publicipProfile = {
      name: name,
      publicIpAllocationMethod: supportedAllocationTypes[0]
    };

    if (params.idletimeout) {
      var timeoutAsInt = utils.parseInt(params.idletimeout);
      if (isNaN(timeoutAsInt) || timeoutAsInt === 0) {
        throw new Error($('idletimeout parameter must be an integer'));
      }
      publicipProfile.idleTimeoutInMinutes = timeoutAsInt;
    }

    if (params.allocationMethod) {
      if (utils.stringIsNullOrEmpty(params.allocationMethod)) {
        throw new Error($('allocation method parameter must not be null or empty string'));
      }
      publicipProfile.publicIpAllocationMethod = utils.verifyParamExistsInCollection(supportedAllocationTypes,
        params.allocationMethod, 'allocationMethod');
    }

    if (params.domainNameLabel) {
      if (utils.stringIsNullOrEmpty(params.domainNameLabel)) {
        throw new Error($('domain name label parameter must not be null or empty string'));
      }
      self._createDnsSettingsIfNotExist(publicipProfile);
      publicipProfile.dnsSettings.domainNameLabel = params.domainNameLabel;
    }

    if (params.fqdn) {
      if (utils.stringIsNullOrEmpty(params.fqdn)) {
        throw new Error($('fqdn parameter must not be null or empty string'));
      }
      self._createDnsSettingsIfNotExist(publicipProfile);
      publicipProfile.dnsSettings.fqdn = params.fqdn;
    }

    if (params.reverseFqdn) {
      if (utils.stringIsNullOrEmpty(params.reverseFqdn)) {
        throw new Error($('reverse fqdn parameter must not be null or empty string'));
      }
      self._createDnsSettingsIfNotExist(publicipProfile);
      publicipProfile.dnsSettings.fqdn = params.fqdn;
    }

    if (params.tags) {
      publicipProfile.tags = TagUtils.buildTagsParameter(null, params);
    }

    if (params.location) {
      publicipProfile.location = params.location;
    }

    return publicipProfile;
  },

  _createDnsSettingsIfNotExist: function (publicip) {
    if (!publicip.dnsSettings) publicip.dnsSettings = {};
  }
});

module.exports = Publicip;