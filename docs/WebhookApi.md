# TurnitinCoreApi.WebhookApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete Webhook endpoint
[**getWebhook**](WebhookApi.md#getWebhook) | **GET** /webhooks/{id} | Get Webhook endpoint info
[**updateWebhook**](WebhookApi.md#updateWebhook) | **PATCH** /webhooks/{id} | Update Webhook endpoint info
[**webhooksGet**](WebhookApi.md#webhooksGet) | **GET** /webhooks | List registered Webhook endpoints
[**webhooksPost**](WebhookApi.md#webhooksPost) | **POST** /webhooks | Register a Webhook endpoint



## deleteWebhook

> deleteWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Delete Webhook endpoint

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.WebhookApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | 
apiInstance.deleteWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> Webhook getWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Get Webhook endpoint info

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.WebhookApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | 
apiInstance.getWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> Webhook updateWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data)

Update Webhook endpoint info

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.WebhookApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | 
let data = new TurnitinCoreApi.WebhookPathRequest(); // WebhookPathRequest | 
apiInstance.updateWebhook(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data, (error, data, response) => {
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
 **id** | **String**|  | 
 **data** | [**WebhookPathRequest**](WebhookPathRequest.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhooksGet

> [Webhook] webhooksGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion)

List registered Webhook endpoints

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.WebhookApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
apiInstance.webhooksGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, (error, data, response) => {
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

[**[Webhook]**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksPost

> Webhook webhooksPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, data)

Register a Webhook endpoint

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.WebhookApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let data = new TurnitinCoreApi.WebhookWithSecret(); // WebhookWithSecret | 
apiInstance.webhooksPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, data, (error, data, response) => {
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
 **data** | [**WebhookWithSecret**](WebhookWithSecret.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

