// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+o4=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'x-ms-correlation-request-id': 'e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235438Z:e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:54:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+o4=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'x-ms-correlation-request-id': 'e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235438Z:e92669b3-a0ca-4b0b-913d-aa9ab79f32e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:54:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+o4=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTg3NTM2NjAtMmUzNy00MGM4LTg2MmUtYmU2Y2QyMGNkMzky?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'x-ms-correlation-request-id': 'cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235439Z:cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:54:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+o4=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTg3NTM2NjAtMmUzNy00MGM4LTg2MmUtYmU2Y2QyMGNkMzky?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'x-ms-correlation-request-id': 'cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235439Z:cb418c15-1d70-44d0-b34d-c9c3b62e62e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:54:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTg3NTM2NjAtMmUzNy00MGM4LTg2MmUtYmU2Y2QyMGNkMzky?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'x-ms-correlation-request-id': '26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235509Z:26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:55:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/ZTg3NTM2NjAtMmUzNy00MGM4LTg2MmUtYmU2Y2QyMGNkMzky?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'x-ms-correlation-request-id': '26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235509Z:26fc5a70-24ab-4c20-8d18-ad23d301d2b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:55:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+rk=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'x-ms-correlation-request-id': 'f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235510Z:f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:55:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+rk=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'x-ms-correlation-request-id': 'f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235510Z:f89aa7ea-30b0-4fb1-a1e4-a9425fffb4eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:55:09 GMT',
  connection: 'close' });
 return result; }]];