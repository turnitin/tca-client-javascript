# TurnitinCoreApi.SimilarityGenerationSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchRepositories** | **[String]** | List of repositories to search | 
**submissionAutoExcludes** | **[String]** | List of submission IDs to exclude from report | [optional] 
**autoExcludeSelfMatchingScope** | **String** | self matching submissions to exclude from report | [optional] 
**priority** | **Boolean** | Priority level of report generation | [optional] 



## Enum: [SearchRepositoriesEnum]


* `INTERNET` (value: `"INTERNET"`)

* `PUBLICATION` (value: `"PUBLICATION"`)

* `SUBMITTED_WORK` (value: `"SUBMITTED_WORK"`)

* `PRIVATE` (value: `"PRIVATE"`)

* `CROSSREF` (value: `"CROSSREF"`)

* `CROSSREF_POSTED_CONTENT` (value: `"CROSSREF_POSTED_CONTENT"`)





## Enum: AutoExcludeSelfMatchingScopeEnum


* `ALL` (value: `"ALL"`)

* `GROUP` (value: `"GROUP"`)

* `GROUP_CONTEXT` (value: `"GROUP_CONTEXT"`)

* `NONE` (value: `"NONE"`)





## Enum: PriorityEnum


* `false` (value: `"false"`)




