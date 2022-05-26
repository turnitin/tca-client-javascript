# TurnitinCoreApi.SimpleSubmissionResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the unique ID of the submission | [optional] 
**owner** | **String** | the owner of the submission | [optional] 
**title** | **String** | the title of the submission | [optional] 
**status** | **String** | the current status of the Submission | [optional] 
**createdTime** | **Date** | RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made.  | [optional] 



## Enum: StatusEnum


* `CREATED` (value: `"CREATED"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `DELETED` (value: `"DELETED"`)

* `ERROR` (value: `"ERROR"`)




