// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'f70d6da2-7178-4fc0-96a6-4e546a12b9f4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1ad67d90-b9f2-4267-bc62-72487a3826f1',
  'x-ms-routing-request-id': 'WESTUS:20160322T185731Z:1ad67d90-b9f2-4267-bc62-72487a3826f1',
  date: 'Tue, 22 Mar 2016 18:57:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'f70d6da2-7178-4fc0-96a6-4e546a12b9f4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1ad67d90-b9f2-4267-bc62-72487a3826f1',
  'x-ms-routing-request-id': 'WESTUS:20160322T185731Z:1ad67d90-b9f2-4267-bc62-72487a3826f1',
  date: 'Tue, 22 Mar 2016 18:57:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7d2bdea8-d3cc-4d54-a58a-194b935cc2f1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'f8adc50e-9c15-4e63-9175-3c0d61272fb8',
  'x-ms-routing-request-id': 'WESTUS:20160322T185802Z:f8adc50e-9c15-4e63-9175-3c0d61272fb8',
  date: 'Tue, 22 Mar 2016 18:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7d2bdea8-d3cc-4d54-a58a-194b935cc2f1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'f8adc50e-9c15-4e63-9175-3c0d61272fb8',
  'x-ms-routing-request-id': 'WESTUS:20160322T185802Z:f8adc50e-9c15-4e63-9175-3c0d61272fb8',
  date: 'Tue, 22 Mar 2016 18:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '4586918f-3b25-457e-a7e0-03234e7553c5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2d69561a-5f3f-4d56-9e4e-a6817178e170',
  'x-ms-routing-request-id': 'WESTUS:20160322T185834Z:2d69561a-5f3f-4d56-9e4e-a6817178e170',
  date: 'Tue, 22 Mar 2016 18:58:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '4586918f-3b25-457e-a7e0-03234e7553c5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2d69561a-5f3f-4d56-9e4e-a6817178e170',
  'x-ms-routing-request-id': 'WESTUS:20160322T185834Z:2d69561a-5f3f-4d56-9e4e-a6817178e170',
  date: 'Tue, 22 Mar 2016 18:58:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd4031c2c-070c-4a33-9d06-6a32eb27128f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '9dc5928d-0a39-4b54-868c-5394c3f9f828',
  'x-ms-routing-request-id': 'WESTUS:20160322T185904Z:9dc5928d-0a39-4b54-868c-5394c3f9f828',
  date: 'Tue, 22 Mar 2016 18:59:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd4031c2c-070c-4a33-9d06-6a32eb27128f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '9dc5928d-0a39-4b54-868c-5394c3f9f828',
  'x-ms-routing-request-id': 'WESTUS:20160322T185904Z:9dc5928d-0a39-4b54-868c-5394c3f9f828',
  date: 'Tue, 22 Mar 2016 18:59:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0323be4a-6ec0-475b-9fb5-76d5d1560d8e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '35af7dc8-b6a9-40e3-b3ab-bf8999ce7a97',
  'x-ms-routing-request-id': 'WESTUS:20160322T185935Z:35af7dc8-b6a9-40e3-b3ab-bf8999ce7a97',
  date: 'Tue, 22 Mar 2016 18:59:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0323be4a-6ec0-475b-9fb5-76d5d1560d8e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '35af7dc8-b6a9-40e3-b3ab-bf8999ce7a97',
  'x-ms-routing-request-id': 'WESTUS:20160322T185935Z:35af7dc8-b6a9-40e3-b3ab-bf8999ce7a97',
  date: 'Tue, 22 Mar 2016 18:59:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\",\r\n  \"endTime\": \"2016-03-22T18:59:44.146797+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '902b5116-e231-41d7-995d-deca5c8da25c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8314bbd4-0c69-402a-b282-5736bf897912',
  'x-ms-routing-request-id': 'WESTUS:20160322T190007Z:8314bbd4-0c69-402a-b282-5736bf897912',
  date: 'Tue, 22 Mar 2016 19:00:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f70d6da2-7178-4fc0-96a6-4e546a12b9f4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"f70d6da2-7178-4fc0-96a6-4e546a12b9f4\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T18:57:30.6489446+00:00\",\r\n  \"endTime\": \"2016-03-22T18:59:44.146797+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '902b5116-e231-41d7-995d-deca5c8da25c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8314bbd4-0c69-402a-b282-5736bf897912',
  'x-ms-routing-request-id': 'WESTUS:20160322T190007Z:8314bbd4-0c69-402a-b282-5736bf897912',
  date: 'Tue, 22 Mar 2016 19:00:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd86f707c-b432-49ce-b628-4115724c2f44',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8651e1ec-e7aa-4022-849d-0959ca9bb0e5',
  'x-ms-routing-request-id': 'WESTUS:20160322T190009Z:8651e1ec-e7aa-4022-849d-0959ca9bb0e5',
  date: 'Tue, 22 Mar 2016 19:00:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd86f707c-b432-49ce-b628-4115724c2f44',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8651e1ec-e7aa-4022-849d-0959ca9bb0e5',
  'x-ms-routing-request-id': 'WESTUS:20160322T190009Z:8651e1ec-e7aa-4022-849d-0959ca9bb0e5',
  date: 'Tue, 22 Mar 2016 19:00:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0128e8d6-8071-49ad-8dc9-d92b7e26a42b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0ad878f1-4ff5-4980-b623-a9a9611349d3',
  'x-ms-routing-request-id': 'WESTUS:20160322T190040Z:0ad878f1-4ff5-4980-b623-a9a9611349d3',
  date: 'Tue, 22 Mar 2016 19:00:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '0128e8d6-8071-49ad-8dc9-d92b7e26a42b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0ad878f1-4ff5-4980-b623-a9a9611349d3',
  'x-ms-routing-request-id': 'WESTUS:20160322T190040Z:0ad878f1-4ff5-4980-b623-a9a9611349d3',
  date: 'Tue, 22 Mar 2016 19:00:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5a91a485-eb4d-4f44-a584-8b834810dd3c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e9f74dd3-ab84-4abd-847a-961b22667775',
  'x-ms-routing-request-id': 'WESTUS:20160322T190111Z:e9f74dd3-ab84-4abd-847a-961b22667775',
  date: 'Tue, 22 Mar 2016 19:01:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5a91a485-eb4d-4f44-a584-8b834810dd3c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e9f74dd3-ab84-4abd-847a-961b22667775',
  'x-ms-routing-request-id': 'WESTUS:20160322T190111Z:e9f74dd3-ab84-4abd-847a-961b22667775',
  date: 'Tue, 22 Mar 2016 19:01:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b7b6ce5a-60db-4f81-91ed-3773072cb967',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b57dad0c-e06a-46df-8f59-d36e8bb21167',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190143Z:b57dad0c-e06a-46df-8f59-d36e8bb21167',
  date: 'Tue, 22 Mar 2016 19:01:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b7b6ce5a-60db-4f81-91ed-3773072cb967',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b57dad0c-e06a-46df-8f59-d36e8bb21167',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190143Z:b57dad0c-e06a-46df-8f59-d36e8bb21167',
  date: 'Tue, 22 Mar 2016 19:01:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '1dc65328-5ee0-4579-b215-67c3f9d3ba76',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e81c6aa3-9988-41a2-9088-476406515058',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190214Z:e81c6aa3-9988-41a2-9088-476406515058',
  date: 'Tue, 22 Mar 2016 19:02:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '1dc65328-5ee0-4579-b215-67c3f9d3ba76',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'e81c6aa3-9988-41a2-9088-476406515058',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190214Z:e81c6aa3-9988-41a2-9088-476406515058',
  date: 'Tue, 22 Mar 2016 19:02:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\",\r\n  \"endTime\": \"2016-03-22T19:02:21.9885271+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'c776f722-b1fe-447a-ad03-c011946f5ac8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4734a839-e56e-426c-b9d3-b6082c80fb8c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190245Z:4734a839-e56e-426c-b9d3-b6082c80fb8c',
  date: 'Tue, 22 Mar 2016 19:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d86f707c-b432-49ce-b628-4115724c2f44?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"d86f707c-b432-49ce-b628-4115724c2f44\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T19:00:08.6933698+00:00\",\r\n  \"endTime\": \"2016-03-22T19:02:21.9885271+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'c776f722-b1fe-447a-ad03-c011946f5ac8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4734a839-e56e-426c-b9d3-b6082c80fb8c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T190245Z:4734a839-e56e-426c-b9d3-b6082c80fb8c',
  date: 'Tue, 22 Mar 2016 19:02:45 GMT',
  connection: 'close' });
 return result; }]];