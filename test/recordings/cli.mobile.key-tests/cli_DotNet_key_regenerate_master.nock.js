// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet8861/regenerateKey?type=master')
  .reply(200, "{\"masterKey\":\"hLEMusFZWHfCcvqomCGgcgYtzPLFnt96\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '48',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'd95b283ec5118a44b8c0e10f34d80427',
  date: 'Wed, 08 Apr 2015 01:18:19 GMT' });
 return result; }]];