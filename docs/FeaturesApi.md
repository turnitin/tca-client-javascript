# TurnitinCoreApi.FeaturesApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featuresEnabledGet**](FeaturesApi.md#featuresEnabledGet) | **GET** /features-enabled | Get information about what features are allowed by the current license



## featuresEnabledGet

> FeaturesEnabled featuresEnabledGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion)

Get information about what features are allowed by the current license

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.FeaturesApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
apiInstance.featuresEnabledGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, (error, data, response) => {
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

### Return type

[**FeaturesEnabled**](FeaturesEnabled.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

