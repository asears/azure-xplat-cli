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
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode7762/authsettings')
  .reply(200, "[{\"provider\":\"aad\",\"appId\":\"123456789\",\"tenants\":[\"tenant.com\"]},{\"packageSid\":\"123456789\",\"provider\":\"microsoft\",\"appId\":\"1234\",\"secret\":\"5678\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '146',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5376a0c26f30989cbbd144b55dfff4bb',
  date: 'Mon, 13 Apr 2015 23:08:42 GMT' });
 return result; }]];