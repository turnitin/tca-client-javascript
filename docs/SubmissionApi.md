# TurnitinCoreApi.SubmissionApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubmission**](SubmissionApi.md#createSubmission) | **POST** /submissions | Create a new Submission
[**deleteSubmission**](SubmissionApi.md#deleteSubmission) | **DELETE** /submissions/{id} | Deletes a submission and associated similarity report.
[**getSubmiddionDetails**](SubmissionApi.md#getSubmiddionDetails) | **GET** /submissions/{id} | Get Submission Details
[**recoverSubmission**](SubmissionApi.md#recoverSubmission) | **PUT** /submissions/{id}/recover | Recover a soft deleted submission
[**uploadSubmittedFile**](SubmissionApi.md#uploadSubmittedFile) | **PUT** /submissions/{id}/original | Upload Submitted File



## createSubmission

> SimpleSubmissionResponse createSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, data)

Create a new Submission

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SubmissionApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let data = new TurnitinCoreApi.SubmissionBase(); // SubmissionBase | 
apiInstance.createSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, data, (error, data, response) => {
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
 **data** | [**SubmissionBase**](SubmissionBase.md)|  | 

### Return type

[**SimpleSubmissionResponse**](SimpleSubmissionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubmission

> SuccessMessage deleteSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts)

Deletes a submission and associated similarity report.

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SubmissionApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let opts = {
  'hard': "'false'" // String | Accepts true or false indicating either hard or soft delete. A soft delete removes the associated submission report/index and changes the saved submission state to DELETED. A hard deletion completely removes the submission information from Panda and TCA and removes the associated report/index, which can not be recovered. 
};
apiInstance.deleteSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts, (error, data, response) => {
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
 **hard** | **String**| Accepts true or false indicating either hard or soft delete. A soft delete removes the associated submission report/index and changes the saved submission state to DELETED. A hard deletion completely removes the submission information from Panda and TCA and removes the associated report/index, which can not be recovered.  | [optional] [default to &#39;false&#39;]

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubmiddionDetails

> Submission getSubmiddionDetails(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Get Submission Details

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SubmissionApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
apiInstance.getSubmiddionDetails(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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

[**Submission**](Submission.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recoverSubmission

> SimpleSubmissionResponse recoverSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Recover a soft deleted submission

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SubmissionApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
apiInstance.recoverSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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

[**SimpleSubmissionResponse**](SimpleSubmissionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadSubmittedFile

> SuccessMessage uploadSubmittedFile(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, contentType, contentDisposition, file)

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

let apiInstance = new TurnitinCoreApi.SubmissionApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let contentType = "contentType_example"; // String | *Must be 'binary/octet-stream' 
let contentDisposition = inline; filename="MyFile.docx"; // String | *must include the \"filename\" parameter, e.g. `inline; filename=\"MyFile.docx\"`. To support UTF-8 filenames, you must URL encode the header 
let file = {key: null}; // Object | the user's submitted file
apiInstance.uploadSubmittedFile(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, contentType, contentDisposition, file, (error, data, response) => {
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
 **contentType** | **String**| *Must be &#39;binary/octet-stream&#39;  | 
 **contentDisposition** | **String**| *must include the \&quot;filename\&quot; parameter, e.g. &#x60;inline; filename&#x3D;\&quot;MyFile.docx\&quot;&#x60;. To support UTF-8 filenames, you must URL encode the header  | 
 **file** | **Object**| the user&#39;s submitted file | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: binary/octet-stream
- **Accept**: application/json

