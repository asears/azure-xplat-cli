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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"7cc1b8ad-4275-48fc-b160-623c483e79fc\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 110,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 210\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '711',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1b373054-0d6d-4f5a-85fe-8bcc42037f19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': '04dcc2ed-9266-49bd-811d-7789be5b4b7a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130330Z:04dcc2ed-9266-49bd-811d-7789be5b4b7a',
  date: 'Fri, 19 Aug 2016 13:03:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2016-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operationResults/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'fbfcbebb-dd23-4214-9d8d-6ee1d11a0135',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'acd46ce7-6b25-49cf-984a-f39aea977891',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130331Z:acd46ce7-6b25-49cf-984a-f39aea977891',
  date: 'Fri, 19 Aug 2016 13:03:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '36352060-6c08-4d49-8656-4542c121ff05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14766',
  'x-ms-correlation-request-id': '535b09ce-71e7-4b2d-9da1-62935e51a336',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130403Z:535b09ce-71e7-4b2d-9da1-62935e51a336',
  date: 'Fri, 19 Aug 2016 13:04:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1b57c242-ac54-454b-8e28-820815106e5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14884',
  'x-ms-correlation-request-id': '7e7c1f82-bef0-4c06-a0c7-5e8a68742278',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130434Z:7e7c1f82-bef0-4c06-a0c7-5e8a68742278',
  date: 'Fri, 19 Aug 2016 13:04:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60888426-f380-4539-a0b7-14d7870c15a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '5d64cb7b-6cec-4640-a9c4-e10aa0788653',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130505Z:5d64cb7b-6cec-4640-a9c4-e10aa0788653',
  date: 'Fri, 19 Aug 2016 13:05:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/fbfcbebb-dd23-4214-9d8d-6ee1d11a0135?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bc7aa17c-39c4-4a4a-b2e0-641a4e485846',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14843',
  'x-ms-correlation-request-id': 'e30d81bb-3786-4c8b-9a7b-bdeb3c62d203',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130536Z:e30d81bb-3786-4c8b-9a7b-bdeb3c62d203',
  date: 'Fri, 19 Aug 2016 13:05:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2016-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e18df8f1-9fd8-4c8a-8c9b-8990acd4cf39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14932',
  'x-ms-correlation-request-id': 'd7f492a6-09e8-4c30-9828-3baa03862a3a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130538Z:d7f492a6-09e8-4c30-9828-3baa03862a3a',
  date: 'Fri, 19 Aug 2016 13:05:38 GMT' });
 return result; }]];