// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17387/providers/Microsoft.Web/sites/webappclitests4811/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17387/providers/Microsoft.Web/sites/webappclitests4811/publishingcredentials/$webappclitests4811\",\"name\":\"webappclitests4811\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests4811\",\"publishingPassword\":\"hcLuDrlw5Eqd1QLen3noQm9o5qWmYFzgxJFcm3Yw8xpmJCtAwdKviDHj9aNu\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests4811:hcLuDrlw5Eqd1QLen3noQm9o5qWmYFzgxJFcm3Yw8xpmJCtAwdKviDHj9aNu@webappclitests4811.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '49a7de20-4ece-40b0-8973-3f7a3640aab1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '02f07118-0415-4148-baad-586d5e237616',
  'x-ms-routing-request-id': 'WESTUS2:20160921T173115Z:02f07118-0415-4148-baad-586d5e237616',
  date: 'Wed, 21 Sep 2016 17:31:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17387/providers/Microsoft.Web/sites/webappclitests4811/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17387/providers/Microsoft.Web/sites/webappclitests4811/publishingcredentials/$webappclitests4811\",\"name\":\"webappclitests4811\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests4811\",\"publishingPassword\":\"hcLuDrlw5Eqd1QLen3noQm9o5qWmYFzgxJFcm3Yw8xpmJCtAwdKviDHj9aNu\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests4811:hcLuDrlw5Eqd1QLen3noQm9o5qWmYFzgxJFcm3Yw8xpmJCtAwdKviDHj9aNu@webappclitests4811.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '49a7de20-4ece-40b0-8973-3f7a3640aab1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '02f07118-0415-4148-baad-586d5e237616',
  'x-ms-routing-request-id': 'WESTUS2:20160921T173115Z:02f07118-0415-4148-baad-586d5e237616',
  date: 'Wed, 21 Sep 2016 17:31:14 GMT',
  connection: 'close' });
 return result; }]];