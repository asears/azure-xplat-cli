// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate8208/scriptActions/testscriptname?api-version=2015-03-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'd890aec2-c927-4821-8a4e-a5f69f32b980',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '14c2b08f-a23b-485a-98d0-137940007516',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T085305Z:14c2b08f-a23b-485a-98d0-137940007516',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:53:04 GMT' });
 return result; }]];