# TurnitinCoreApi.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | unique id of webhook | 
**createdTime** | **Date** | RFC3339  timestamp of when this Webhook was initially created. This is the time at which the POST to /webhooks was made.  | [optional] 
**description** | **String** | a human readable description of the webhook | [optional] 
**url** | **String** | the URL to callback with events, this must be https unless (allow_insecure is true) | 
**allowInsecure** | **Boolean** | if using an non https url, this must be set to true | [optional] 
**eventTypes** | **[String]** | an array of the types of callbacks that will be sent to this webhook | 



## Enum: [EventTypesEnum]


* `SUBMISSION_COMPLETE` (value: `"SUBMISSION_COMPLETE"`)

* `SIMILARITY_COMPLETE` (value: `"SIMILARITY_COMPLETE"`)

* `SIMILARITY_UPDATED` (value: `"SIMILARITY_UPDATED"`)

* `PDF_STATUS` (value: `"PDF_STATUS"`)

* `GROUP_ATTACHMENT_COMPLETE` (value: `"GROUP_ATTACHMENT_COMPLETE"`)




