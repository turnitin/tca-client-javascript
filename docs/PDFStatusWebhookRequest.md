# TurnitinCoreApi.PDFStatusWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The requesting Pdf status | [optional] 
**id** | **String** | the PDF ID | [optional] 
**submissionId** | **String** | the associated submission ID | [optional] 
**metadata** | [**SubmissionCompleteWebhookRequestAllOfMetadata**](SubmissionCompleteWebhookRequestAllOfMetadata.md) |  | [optional] 



## Enum: StatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `PENDING` (value: `"PENDING"`)

* `FAILED` (value: `"FAILED"`)




