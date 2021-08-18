# TurnitinCoreApi.EULAApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eulaVersionIdAcceptPost**](EULAApi.md#eulaVersionIdAcceptPost) | **POST** /eula/{version_id}/accept | Accepts a particular EULA version on behalf of an external user
[**eulaVersionIdAcceptUserIdGet**](EULAApi.md#eulaVersionIdAcceptUserIdGet) | **GET** /eula/{version_id}/accept/{user_id} | Queries the acceptences of a particular EULA version on behalf of an external user
[**eulaVersionIdGet**](EULAApi.md#eulaVersionIdGet) | **GET** /eula/{version_id} | Gets information about a particular EULA version
[**eulaVersionIdViewGet**](EULAApi.md#eulaVersionIdViewGet) | **GET** /eula/{version_id}/view | Gets the text of a particular EULA version



## eulaVersionIdAcceptPost

> EulaAcceptListItem eulaVersionIdAcceptPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, data)

Accepts a particular EULA version on behalf of an external user

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.EULAApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let versionId = latest; // String | The EULA version ID (or `latest`) 
let data = new TurnitinCoreApi.EulaAcceptRequest(); // EulaAcceptRequest | 
apiInstance.eulaVersionIdAcceptPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, data, (error, data, response) => {
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
 **versionId** | **String**| The EULA version ID (or &#x60;latest&#x60;)  | 
 **data** | [**EulaAcceptRequest**](EulaAcceptRequest.md)|  | 

### Return type

[**EulaAcceptListItem**](EulaAcceptListItem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eulaVersionIdAcceptUserIdGet

> [EulaAcceptListItem] eulaVersionIdAcceptUserIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, userId)

Queries the acceptences of a particular EULA version on behalf of an external user

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.EULAApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let versionId = latest; // String | The EULA version ID (or `latest`) 
let userId = "userId_example"; // String | The user associated with the EULA status 
apiInstance.eulaVersionIdAcceptUserIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, userId, (error, data, response) => {
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
 **versionId** | **String**| The EULA version ID (or &#x60;latest&#x60;)  | 
 **userId** | **String**| The user associated with the EULA status  | 

### Return type

[**[EulaAcceptListItem]**](EulaAcceptListItem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eulaVersionIdGet

> EulaVersion eulaVersionIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts)

Gets information about a particular EULA version

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.EULAApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let versionId = latest; // String | The EULA version ID (or `latest`) 
let opts = {
  'lang': en-US // String | The desired language of the specified EULA version
};
apiInstance.eulaVersionIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts, (error, data, response) => {
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
 **versionId** | **String**| The EULA version ID (or &#x60;latest&#x60;)  | 
 **lang** | **String**| The desired language of the specified EULA version | [optional] 

### Return type

[**EulaVersion**](EulaVersion.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eulaVersionIdViewGet

> String eulaVersionIdViewGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts)

Gets the text of a particular EULA version

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.EULAApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let versionId = latest; // String | The EULA version ID (or `latest`) 
let opts = {
  'lang': en-US // String | The desired language of the specified EULA version
};
apiInstance.eulaVersionIdViewGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts, (error, data, response) => {
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
 **versionId** | **String**| The EULA version ID (or &#x60;latest&#x60;)  | 
 **lang** | **String**| The desired language of the specified EULA version | [optional] 

### Return type

**String**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain; charset=utf-8, application/html

