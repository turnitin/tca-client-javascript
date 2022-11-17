# TurnitinCoreApi.SimilarityApi

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadSimilarityReportPdf**](SimilarityApi.md#downloadSimilarityReportPdf) | **GET** /submissions/{id}/similarity/pdf/{pdf_id} | GET download pdf
[**getSimilarityReportPdfStatus**](SimilarityApi.md#getSimilarityReportPdfStatus) | **GET** /submissions/{id}/similarity/pdf/{pdf_id}/status | GET pdf download status
[**getSimilarityReportResults**](SimilarityApi.md#getSimilarityReportResults) | **GET** /submissions/{id}/similarity | Get Similarity Report Results
[**getSimilarityReportUrl**](SimilarityApi.md#getSimilarityReportUrl) | **POST** /submissions/{id}/viewer-url | Returns a URL to access Cloud Viewer
[**requestSimilarityReport**](SimilarityApi.md#requestSimilarityReport) | **PUT** /submissions/{id}/similarity | Request Similarity Report generation
[**requestSimilarityReportPdf**](SimilarityApi.md#requestSimilarityReportPdf) | **POST** /submissions/{id}/similarity/pdf | Request Pdf download and returns the Pdf Id



## downloadSimilarityReportPdf

> File downloadSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId)

GET download pdf

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let pdfId = "pdfId_example"; // String | The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf) 
apiInstance.downloadSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId, (error, data, response) => {
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
 **pdfId** | **String**| The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf)  | 

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json


## getSimilarityReportPdfStatus

> PdfStatusResponse getSimilarityReportPdfStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId)

GET pdf download status

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let pdfId = "pdfId_example"; // String | The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf) 
apiInstance.getSimilarityReportPdfStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId, (error, data, response) => {
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
 **pdfId** | **String**| The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf)  | 

### Return type

[**PdfStatusResponse**](PdfStatusResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimilarityReportResults

> SimilarityMetadata getSimilarityReportResults(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id)

Get Similarity Report Results

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
apiInstance.getSimilarityReportResults(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, (error, data, response) => {
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

[**SimilarityMetadata**](SimilarityMetadata.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimilarityReportUrl

> SimilarityViewerUrlResponse getSimilarityReportUrl(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data)

Returns a URL to access Cloud Viewer

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let data = new TurnitinCoreApi.SimilarityViewerUrlSettings(); // SimilarityViewerUrlSettings | 
apiInstance.getSimilarityReportUrl(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data, (error, data, response) => {
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
 **data** | [**SimilarityViewerUrlSettings**](SimilarityViewerUrlSettings.md)|  | 

### Return type

[**SimilarityViewerUrlResponse**](SimilarityViewerUrlResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## requestSimilarityReport

> SuccessMessage requestSimilarityReport(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data)

Request Similarity Report generation

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let data = new TurnitinCoreApi.SimilarityPutRequest(); // SimilarityPutRequest | 
apiInstance.requestSimilarityReport(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data, (error, data, response) => {
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
 **data** | [**SimilarityPutRequest**](SimilarityPutRequest.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## requestSimilarityReportPdf

> RequestPdfResponse requestSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, generateSimilarityPDF)

Request Pdf download and returns the Pdf Id

### Example

```javascript
import TurnitinCoreApi from 'turnitin_core_api';
let defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new TurnitinCoreApi.SimilarityApi();
let xTurnitinIntegrationName = myintegration; // String | a human readable string representing the type of integration being used
let xTurnitinIntegrationVersion = v1.0.2; // String | the version of the integration platform being used
let id = "id_example"; // String | The Submission ID (returned upon a successful POST to /submissions) 
let generateSimilarityPDF = new TurnitinCoreApi.GenerateSimilarityPDF(); // GenerateSimilarityPDF | 
apiInstance.requestSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, generateSimilarityPDF, (error, data, response) => {
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
 **generateSimilarityPDF** | [**GenerateSimilarityPDF**](GenerateSimilarityPDF.md)|  | 

### Return type

[**RequestPdfResponse**](RequestPdfResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

