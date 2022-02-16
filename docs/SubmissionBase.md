# TurnitinCoreApi.SubmissionBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Object** | Submission id, optional field | [optional] 
**owner** | **String** | ID of the owning user | [optional] 
**ownerDefaultPermissionSet** | **String** | Default viewer permission set, accepts INSTRUCTOR, LEARNER, EDITOR, USER, APPLICANT, ADMINISTRATOR, UNDEFINED | [optional] 
**title** | **String** | the title of the submission | [optional] 
**submitter** | **String** | (optional) ID of the submitting user, if different from the owning user | [optional] 
**submitterDefaultPermissionSet** | **String** | Default submitter permission set, accepts INSTRUCTOR, LEARNER, EDITOR, USER, APPLICANT, ADMINISTRATOR, UNDEFINED | [optional] 
**eula** | [**Eula**](Eula.md) |  | [optional] 
**metadata** | [**SubmissionBaseMetadata**](SubmissionBaseMetadata.md) |  | [optional] 
**extractTextOnly** | **Boolean** | (optional) indicates if the submission should be treated as a text only submission. A text only submission cannot generate full reports or be viewed in the viewer, but can use the index only endpoint to be indexed | [optional] 



## Enum: OwnerDefaultPermissionSetEnum


* `INSTRUCTOR` (value: `"INSTRUCTOR"`)

* `LEARNER` (value: `"LEARNER"`)

* `EDITOR` (value: `"EDITOR"`)

* `USER` (value: `"USER"`)

* `APPLICANT` (value: `"APPLICANT"`)

* `ADMINISTRATOR` (value: `"ADMINISTRATOR"`)

* `UNDEFINED` (value: `"UNDEFINED"`)





## Enum: SubmitterDefaultPermissionSetEnum


* `INSTRUCTOR` (value: `"INSTRUCTOR"`)

* `LEARNER` (value: `"LEARNER"`)

* `EDITOR` (value: `"EDITOR"`)

* `USER` (value: `"USER"`)

* `APPLICANT` (value: `"APPLICANT"`)

* `ADMINISTRATOR` (value: `"ADMINISTRATOR"`)

* `UNDEFINED` (value: `"UNDEFINED"`)




