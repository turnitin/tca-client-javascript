# TurnitinCoreApi.GroupsApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupAttachment**](GroupsApi.md#addGroupAttachment) | **POST** /groups/{group_id}/attachments | Add attachment to a group. will create a group if it does not exist.
[**deleteGroupAttachment**](GroupsApi.md#deleteGroupAttachment) | **DELETE** /groups/{group_id}/attachments/{attach_id} | Hard delete group attachment
[**getGroup**](GroupsApi.md#getGroup) | **GET** /groups/{group_id} | Get group, group context and group context owners info
[**getGroupAttachment**](GroupsApi.md#getGroupAttachment) | **GET** /groups/{group_id}/attachments/{attach_id} | Get group attachment
[**getGroupAttachments**](GroupsApi.md#getGroupAttachments) | **GET** /groups/{group_id}/attachments | Get all attachments
[**groupsGroupIdPut**](GroupsApi.md#groupsGroupIdPut) | **PUT** /groups/{group_id} | upsert group, group context and group context owners info
[**updateGroupAttachment**](GroupsApi.md#updateGroupAttachment) | **PATCH** /groups/{group_id}/attachments/{attach_id} | Patch a group attachment
[**uploadGroupAttachment**](GroupsApi.md#uploadGroupAttachment) | **PUT** /groups/{group_id}/attachments/{attach_id}/original | Upload Submitted File



## addGroupAttachment

> AddGroupAttachmentResponse addGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, data)

Add attachment to a group. will create a group if it does not exist.

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
let data = new TurnitinCoreApi.AddGroupAttachmentRequest(); // AddGroupAttachmentRequest | 
apiInstance.addGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 
 **data** | [**AddGroupAttachmentRequest**](AddGroupAttachmentRequest.md)|  | 

### Return type

[**AddGroupAttachmentResponse**](AddGroupAttachmentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroupAttachment

> deleteGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId)

Hard delete group attachment

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
let attachId = "attachId_example"; // String | The attachment ID (returned from a successful group attachment request) 
apiInstance.deleteGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 
 **attachId** | **String**| The attachment ID (returned from a successful group attachment request)  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroup

> AggregateGroup getGroup(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId)

Get group, group context and group context owners info

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
apiInstance.getGroup(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 

### Return type

[**AggregateGroup**](AggregateGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupAttachment

> GroupAttachmentResponse getGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId)

Get group attachment

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
let attachId = "attachId_example"; // String | The attachment ID (returned from a successful group attachment request) 
apiInstance.getGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 
 **attachId** | **String**| The attachment ID (returned from a successful group attachment request)  | 

### Return type

[**GroupAttachmentResponse**](GroupAttachmentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupAttachments

> InlineResponse200 getGroupAttachments(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId)

Get all attachments

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
apiInstance.getGroupAttachments(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsGroupIdPut

> AggregateGroup groupsGroupIdPut(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, data)

upsert group, group context and group context owners info

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
let data = new TurnitinCoreApi.AggregateGroup(); // AggregateGroup | 
apiInstance.groupsGroupIdPut(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 
 **data** | [**AggregateGroup**](AggregateGroup.md)|  | 

### Return type

[**AggregateGroup**](AggregateGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGroupAttachment

> GroupAttachmentResponse updateGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, data)

Patch a group attachment

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | group_id
let attachId = "attachId_example"; // String | The attachment ID (returned from a successful group attachment request) 
let data = new TurnitinCoreApi.AddGroupAttachmentRequest(); // AddGroupAttachmentRequest | 
apiInstance.updateGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| group_id | 
 **attachId** | **String**| The attachment ID (returned from a successful group attachment request)  | 
 **data** | [**AddGroupAttachmentRequest**](AddGroupAttachmentRequest.md)|  | 

### Return type

[**GroupAttachmentResponse**](GroupAttachmentResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadGroupAttachment

> SuccessMessage uploadGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, contentDisposition, file)

Upload Submitted File

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.GroupsApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let groupId = "groupId_example"; // String | The Group ID (required to already exist) 
let attachId = "attachId_example"; // String | The attachment ID (returned from a successful group attachment request) 
let contentDisposition = inline; filename="MyFile.docx"; // String | *must include the \"filename\" parameter, e.g. `inline; filename=\"MyFile.docx\"` 
let file = null; // Object | the attachment file
apiInstance.uploadGroupAttachment(xTurnitinIntegrationName, xTurnitinIntegrationVersion, groupId, attachId, contentDisposition, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTurnitinIntegrationName** | **String**| a human readable string representing the type of integration being used | 
 **xTurnitinIntegrationVersion** | **String**| the version of the integration platform being used | 
 **groupId** | **String**| The Group ID (required to already exist)  | 
 **attachId** | **String**| The attachment ID (returned from a successful group attachment request)  | 
 **contentDisposition** | **String**| *must include the \&quot;filename\&quot; parameter, e.g. &#x60;inline; filename&#x3D;\&quot;MyFile.docx\&quot;&#x60;  | 
 **file** | **Object**| the attachment file | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: binary/octet-stream
- **Accept**: application/json

