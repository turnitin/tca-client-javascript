# TurnitinCoreApi.SimilarityMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overallMatchPercentage** | **Number** | Represents the percentage match against all sources | 
**internetMatchPercentage** | **Number** | Represents the percentage match against internet | [optional] 
**publicationMatchPercentage** | **Number** | Represents the percentage match against all publications | [optional] 
**submittedWorksMatchPercentage** | **Number** | Represents the percentage match against all submitted works | [optional] 
**submissionId** | **String** |  | 
**status** | **String** | possible values PENDING, COMPLETE | 
**timeGenerated** | **String** | Time the report finished generating.  If not set the report has not finished generating | 
**timeRequested** | **String** | Time the report was requested | 
**topMatches** | [**[SimilarityMetadataAllOfTopMatches]**](SimilarityMetadataAllOfTopMatches.md) | Top matches | 
**topSourceLargestMatchedWordCount** | **Number** | Largest individual matched word count, 0 if there isn&#39;t a match to this submission. | 


