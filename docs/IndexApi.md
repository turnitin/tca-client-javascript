# TurnitinCoreApi.IndexApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIndexStatus**](IndexApi.md#getIndexStatus) | **GET** /submissions/{id}/index | Return index state of submission
[**indexSubmission**](IndexApi.md#indexSubmission) | **PUT** /submissions/{id}/index | Index and return index state of submission



## getIndexStatus

> IndexStateSettings getIndexStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Return index state of submission

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.IndexApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
apiInstance.getIndexStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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
 **id** | **String**| The Submission ID (returned upon a successful POST to /submissions)  | 

### Return type

[**IndexStateSettings**](IndexStateSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexSubmission

> IndexStateSettings indexSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts)

Index and return index state of submission

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.IndexApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let opts = {
  'asynchronous': true // Boolean | asynchronous request
};
apiInstance.indexSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts, (error, data, response) => {
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
 **id** | **String**| The Submission ID (returned upon a successful POST to /submissions)  | 
 **asynchronous** | **Boolean**| asynchronous request | [optional] 

### Return type

[**IndexStateSettings**](IndexStateSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

