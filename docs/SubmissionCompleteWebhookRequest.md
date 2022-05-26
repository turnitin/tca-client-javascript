# TurnitinCoreApi.SubmissionCompleteWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | the owner of the submission | [optional] 
**title** | **String** | the title of the submission | [optional] 
**status** | **String** | the current status of the Submission | [optional] 
**id** | **String** | the unique ID of the submission | [optional] 
**contentType** | **String** | the content type of the submission | [optional] 
**pageCount** | **Number** | the number of pages in the submission | [optional] 
**wordCount** | **Number** | the number of words in the submission | [optional] 
**characterCount** | **Number** | the number of characters in the submission | [optional] 
**errorCode** | **String** | an error code representing the type of error encountered (if applicable)  | [optional] 
**createdTime** | **Date** | RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made.  | [optional] 
**capabilities** | **[String]** | Set of capabilities available to the current submission | [optional] 
**metadata** | [**SubmissionCompleteWebhookRequestAllOfMetadata**](SubmissionCompleteWebhookRequestAllOfMetadata.md) |  | [optional] 



## Enum: StatusEnum


* `CREATED` (value: `"CREATED"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `DELETED` (value: `"DELETED"`)

* `ERROR` (value: `"ERROR"`)





## Enum: ErrorCodeEnum


* `UNSUPPORTED_FILETYPE` (value: `"UNSUPPORTED_FILETYPE"`)

* `PROCESSING_ERROR` (value: `"PROCESSING_ERROR"`)

* `CANNOT_EXTRACT_TEXT` (value: `"CANNOT_EXTRACT_TEXT"`)

* `TOO_LITTLE_TEXT` (value: `"TOO_LITTLE_TEXT"`)

* `TOO_MUCH_TEXT` (value: `"TOO_MUCH_TEXT"`)

* `TOO_MANY_PAGES` (value: `"TOO_MANY_PAGES"`)

* `FILE_LOCKED` (value: `"FILE_LOCKED"`)

* `CORRUPT_FILE` (value: `"CORRUPT_FILE"`)





## Enum: [CapabilitiesEnum]


* `INDEX` (value: `"INDEX"`)

* `SIMILARITY` (value: `"SIMILARITY"`)

* `VIEWER` (value: `"VIEWER"`)




