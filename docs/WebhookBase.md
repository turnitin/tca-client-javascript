# TurnitinCoreApi.WebhookBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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




