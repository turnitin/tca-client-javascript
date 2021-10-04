# turnitin_core_api

TurnitinCoreApi - JavaScript client for turnitin_core_api
Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download.
Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs).
## Integration Scope and API Key Management
TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA.
### Admin Console UI
First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product
Integration Scopes (you can create a new one, or add keys to existing)

  * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button
  API Keys
  * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->
  Enter a name --> click `Create and View button`
  * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)

## TCA Flow

  *  Register a webhook
  *  Create a submission
  *  Upload a file for the submission
  *  Wait for the submission upload to process
     * If you registered a webhook, a callback will be sent to it when upload is complete
     * The status of the *submission* will also update to `COMPLETE`
  *  Request a Similarity Report
  *  Wait for similarity report to process
     * If you registered a webhook, a callback will be sent to it when report is complete
     * The status of the *report* will also be updated to `COMPLETE`
  *  Request a URL with parameters to view the Similarity Report

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.226
- Package version: 1.0.226
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install turnitin_core_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your turnitin_core_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TurnitinCoreApi = require('turnitin_core_api');

var defaultClient = TurnitinCoreApi.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['Authorization'] = "Token"

var api = new TurnitinCoreApi.EULAApi()
var xTurnitinIntegrationName = myintegration; // {String} a human readable string representing the type of integration being used
var xTurnitinIntegrationVersion = v1.0.2; // {String} the version of the integration platform being used
var versionId = latest; // {String} The EULA version ID (or `latest`) 
var data = new TurnitinCoreApi.EulaAcceptRequest(); // {EulaAcceptRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.eulaVersionIdAcceptPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, data, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app-us.turnitin.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TurnitinCoreApi.EULAApi* | [**eulaVersionIdAcceptPost**](docs/EULAApi.md#eulaVersionIdAcceptPost) | **POST** /eula/{version_id}/accept | Accepts a particular EULA version on behalf of an external user
*TurnitinCoreApi.EULAApi* | [**eulaVersionIdAcceptUserIdGet**](docs/EULAApi.md#eulaVersionIdAcceptUserIdGet) | **GET** /eula/{version_id}/accept/{user_id} | Queries the acceptences of a particular EULA version on behalf of an external user
*TurnitinCoreApi.EULAApi* | [**eulaVersionIdGet**](docs/EULAApi.md#eulaVersionIdGet) | **GET** /eula/{version_id} | Gets information about a particular EULA version
*TurnitinCoreApi.EULAApi* | [**eulaVersionIdViewGet**](docs/EULAApi.md#eulaVersionIdViewGet) | **GET** /eula/{version_id}/view | Gets the text of a particular EULA version
*TurnitinCoreApi.FeaturesApi* | [**featuresEnabledGet**](docs/FeaturesApi.md#featuresEnabledGet) | **GET** /features-enabled | Get information about what features are allowed by the current license
*TurnitinCoreApi.GroupsApi* | [**addGroupAttachment**](docs/GroupsApi.md#addGroupAttachment) | **POST** /groups/{group_id}/attachments | Add attachment to a group. will create a group if it does not exist.
*TurnitinCoreApi.GroupsApi* | [**deleteGroupAttachment**](docs/GroupsApi.md#deleteGroupAttachment) | **DELETE** /groups/{group_id}/attachments/{attach_id} | Hard delete group attachment
*TurnitinCoreApi.GroupsApi* | [**getGroup**](docs/GroupsApi.md#getGroup) | **GET** /groups/{group_id} | Get group, group context and group context owners info
*TurnitinCoreApi.GroupsApi* | [**getGroupAttachment**](docs/GroupsApi.md#getGroupAttachment) | **GET** /groups/{group_id}/attachments/{attach_id} | Get group attachment
*TurnitinCoreApi.GroupsApi* | [**getGroupAttachments**](docs/GroupsApi.md#getGroupAttachments) | **GET** /groups/{group_id}/attachments | Get all attachments
*TurnitinCoreApi.GroupsApi* | [**groupsGroupIdPut**](docs/GroupsApi.md#groupsGroupIdPut) | **PUT** /groups/{group_id} | upsert group, group context and group context owners info
*TurnitinCoreApi.GroupsApi* | [**updateGroupAttachment**](docs/GroupsApi.md#updateGroupAttachment) | **PATCH** /groups/{group_id}/attachments/{attach_id} | Patch a group attachment
*TurnitinCoreApi.GroupsApi* | [**uploadGroupAttachment**](docs/GroupsApi.md#uploadGroupAttachment) | **PUT** /groups/{group_id}/attachments/{attach_id}/original | Upload Submitted File
*TurnitinCoreApi.IndexApi* | [**getIndexStatus**](docs/IndexApi.md#getIndexStatus) | **GET** /submissions/{id}/index | Return index state of submission
*TurnitinCoreApi.IndexApi* | [**indexSubmission**](docs/IndexApi.md#indexSubmission) | **PUT** /submissions/{id}/index | Index and return index state of submission
*TurnitinCoreApi.SimilarityApi* | [**downloadSimilarityReportPdf**](docs/SimilarityApi.md#downloadSimilarityReportPdf) | **GET** /submissions/{id}/similarity/pdf/{pdf_id} | GET download pdf
*TurnitinCoreApi.SimilarityApi* | [**getSimilarityReportPdfStatus**](docs/SimilarityApi.md#getSimilarityReportPdfStatus) | **GET** /submissions/{id}/similarity/pdf/{pdf_id}/status | GET pdf download status
*TurnitinCoreApi.SimilarityApi* | [**getSimilarityReportResults**](docs/SimilarityApi.md#getSimilarityReportResults) | **GET** /submissions/{id}/similarity | Get Similarity Report Results
*TurnitinCoreApi.SimilarityApi* | [**getSimilarityReportUrl**](docs/SimilarityApi.md#getSimilarityReportUrl) | **POST** /submissions/{id}/viewer-url | Returns a URL to access Cloud Viewer
*TurnitinCoreApi.SimilarityApi* | [**requestSimilarityReport**](docs/SimilarityApi.md#requestSimilarityReport) | **PUT** /submissions/{id}/similarity | Request Similarity Report generation
*TurnitinCoreApi.SimilarityApi* | [**requestSimilarityReportPdf**](docs/SimilarityApi.md#requestSimilarityReportPdf) | **POST** /submissions/{id}/similarity/pdf | Request Pdf download and returns the Pdf Id
*TurnitinCoreApi.SubmissionApi* | [**createSubmission**](docs/SubmissionApi.md#createSubmission) | **POST** /submissions | Create a new Submission
*TurnitinCoreApi.SubmissionApi* | [**deleteSubmission**](docs/SubmissionApi.md#deleteSubmission) | **DELETE** /submissions/{id} | Deletes a submission and associated similarity report.
*TurnitinCoreApi.SubmissionApi* | [**getSubmiddionDetails**](docs/SubmissionApi.md#getSubmiddionDetails) | **GET** /submissions/{id} | Get Submission Details
*TurnitinCoreApi.SubmissionApi* | [**recoverSubmission**](docs/SubmissionApi.md#recoverSubmission) | **PUT** /submissions/{id}/recover | Recover a soft deleted submission
*TurnitinCoreApi.SubmissionApi* | [**uploadSubmittedFile**](docs/SubmissionApi.md#uploadSubmittedFile) | **PUT** /submissions/{id}/original | Upload Submitted File
*TurnitinCoreApi.WebhookApi* | [**deleteWebhook**](docs/WebhookApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete Webhook endpoint
*TurnitinCoreApi.WebhookApi* | [**getWebhook**](docs/WebhookApi.md#getWebhook) | **GET** /webhooks/{id} | Get Webhook endpoint info
*TurnitinCoreApi.WebhookApi* | [**updateWebhook**](docs/WebhookApi.md#updateWebhook) | **PATCH** /webhooks/{id} | Update Webhook endpoint info
*TurnitinCoreApi.WebhookApi* | [**webhooksGet**](docs/WebhookApi.md#webhooksGet) | **GET** /webhooks | List registered Webhook endpoints
*TurnitinCoreApi.WebhookApi* | [**webhooksPost**](docs/WebhookApi.md#webhooksPost) | **POST** /webhooks | Register a Webhook endpoint


## Documentation for Models

 - [TurnitinCoreApi.AddGroupAttachmentRequest](docs/AddGroupAttachmentRequest.md)
 - [TurnitinCoreApi.AddGroupAttachmentResponse](docs/AddGroupAttachmentResponse.md)
 - [TurnitinCoreApi.AggregateGroup](docs/AggregateGroup.md)
 - [TurnitinCoreApi.AuthorMetadataOverride](docs/AuthorMetadataOverride.md)
 - [TurnitinCoreApi.Error](docs/Error.md)
 - [TurnitinCoreApi.Eula](docs/Eula.md)
 - [TurnitinCoreApi.EulaAcceptListItem](docs/EulaAcceptListItem.md)
 - [TurnitinCoreApi.EulaAcceptRequest](docs/EulaAcceptRequest.md)
 - [TurnitinCoreApi.EulaVersion](docs/EulaVersion.md)
 - [TurnitinCoreApi.FeaturesEnabled](docs/FeaturesEnabled.md)
 - [TurnitinCoreApi.FeaturesGenerationSettings](docs/FeaturesGenerationSettings.md)
 - [TurnitinCoreApi.FeaturesSimilarity](docs/FeaturesSimilarity.md)
 - [TurnitinCoreApi.FeaturesSimilarityViewSettings](docs/FeaturesSimilarityViewSettings.md)
 - [TurnitinCoreApi.FeaturesTenant](docs/FeaturesTenant.md)
 - [TurnitinCoreApi.FeaturesViewerModes](docs/FeaturesViewerModes.md)
 - [TurnitinCoreApi.Group](docs/Group.md)
 - [TurnitinCoreApi.GroupAttachmentResponse](docs/GroupAttachmentResponse.md)
 - [TurnitinCoreApi.GroupContext](docs/GroupContext.md)
 - [TurnitinCoreApi.IndexStateSettings](docs/IndexStateSettings.md)
 - [TurnitinCoreApi.IndexingSettings](docs/IndexingSettings.md)
 - [TurnitinCoreApi.InlineObject](docs/InlineObject.md)
 - [TurnitinCoreApi.InlineResponse200](docs/InlineResponse200.md)
 - [TurnitinCoreApi.PdfStatusResponse](docs/PdfStatusResponse.md)
 - [TurnitinCoreApi.RateLimitError](docs/RateLimitError.md)
 - [TurnitinCoreApi.RequestPdfResponse](docs/RequestPdfResponse.md)
 - [TurnitinCoreApi.Sidebar](docs/Sidebar.md)
 - [TurnitinCoreApi.SimilarityGenerationSettings](docs/SimilarityGenerationSettings.md)
 - [TurnitinCoreApi.SimilarityMetadata](docs/SimilarityMetadata.md)
 - [TurnitinCoreApi.SimilarityMetadataAllOf](docs/SimilarityMetadataAllOf.md)
 - [TurnitinCoreApi.SimilarityMetadataAllOfTopMatches](docs/SimilarityMetadataAllOfTopMatches.md)
 - [TurnitinCoreApi.SimilarityPutRequest](docs/SimilarityPutRequest.md)
 - [TurnitinCoreApi.SimilarityScoreData](docs/SimilarityScoreData.md)
 - [TurnitinCoreApi.SimilaritySettings](docs/SimilaritySettings.md)
 - [TurnitinCoreApi.SimilaritySettingsModes](docs/SimilaritySettingsModes.md)
 - [TurnitinCoreApi.SimilaritySettingsViewSettings](docs/SimilaritySettingsViewSettings.md)
 - [TurnitinCoreApi.SimilarityViewSettings](docs/SimilarityViewSettings.md)
 - [TurnitinCoreApi.SimilarityViewerUrlResponse](docs/SimilarityViewerUrlResponse.md)
 - [TurnitinCoreApi.SimilarityViewerUrlSettings](docs/SimilarityViewerUrlSettings.md)
 - [TurnitinCoreApi.SimpleSubmissionResponse](docs/SimpleSubmissionResponse.md)
 - [TurnitinCoreApi.SimpleSubmissionResponseAllOf](docs/SimpleSubmissionResponseAllOf.md)
 - [TurnitinCoreApi.Submission](docs/Submission.md)
 - [TurnitinCoreApi.SubmissionAllOf](docs/SubmissionAllOf.md)
 - [TurnitinCoreApi.SubmissionBase](docs/SubmissionBase.md)
 - [TurnitinCoreApi.SubmissionBaseMetadata](docs/SubmissionBaseMetadata.md)
 - [TurnitinCoreApi.SubmissionSizeError](docs/SubmissionSizeError.md)
 - [TurnitinCoreApi.SuccessMessage](docs/SuccessMessage.md)
 - [TurnitinCoreApi.Users](docs/Users.md)
 - [TurnitinCoreApi.ViewerPermissions](docs/ViewerPermissions.md)
 - [TurnitinCoreApi.Webhook](docs/Webhook.md)
 - [TurnitinCoreApi.WebhookAllOf](docs/WebhookAllOf.md)
 - [TurnitinCoreApi.WebhookBase](docs/WebhookBase.md)
 - [TurnitinCoreApi.WebhookPathRequest](docs/WebhookPathRequest.md)
 - [TurnitinCoreApi.WebhookWithSecret](docs/WebhookWithSecret.md)
 - [TurnitinCoreApi.WebhookWithSecretAllOf](docs/WebhookWithSecretAllOf.md)
 - [TurnitinCoreApi.WebhooksMetadata](docs/WebhooksMetadata.md)


## Documentation for Authorization



### api_key


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

