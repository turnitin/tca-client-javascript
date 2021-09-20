/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.225
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddGroupAttachmentRequest from './model/AddGroupAttachmentRequest';
import AddGroupAttachmentResponse from './model/AddGroupAttachmentResponse';
import AggregateGroup from './model/AggregateGroup';
import AuthorMetadataOverride from './model/AuthorMetadataOverride';
import Error from './model/Error';
import Eula from './model/Eula';
import EulaAcceptListItem from './model/EulaAcceptListItem';
import EulaAcceptRequest from './model/EulaAcceptRequest';
import EulaVersion from './model/EulaVersion';
import FeaturesEnabled from './model/FeaturesEnabled';
import FeaturesGenerationSettings from './model/FeaturesGenerationSettings';
import FeaturesSimilarity from './model/FeaturesSimilarity';
import FeaturesSimilarityViewSettings from './model/FeaturesSimilarityViewSettings';
import FeaturesTenant from './model/FeaturesTenant';
import FeaturesViewerModes from './model/FeaturesViewerModes';
import Group from './model/Group';
import GroupAttachmentResponse from './model/GroupAttachmentResponse';
import GroupContext from './model/GroupContext';
import IndexStateSettings from './model/IndexStateSettings';
import IndexingSettings from './model/IndexingSettings';
import InlineObject from './model/InlineObject';
import InlineResponse200 from './model/InlineResponse200';
import PdfStatusResponse from './model/PdfStatusResponse';
import RateLimitError from './model/RateLimitError';
import RequestPdfResponse from './model/RequestPdfResponse';
import Sidebar from './model/Sidebar';
import SimilarityGenerationSettings from './model/SimilarityGenerationSettings';
import SimilarityMetadata from './model/SimilarityMetadata';
import SimilarityMetadataAllOf from './model/SimilarityMetadataAllOf';
import SimilarityMetadataAllOfTopMatches from './model/SimilarityMetadataAllOfTopMatches';
import SimilarityOverview from './model/SimilarityOverview';
import SimilarityOverviewMatchAggregate from './model/SimilarityOverviewMatchAggregate';
import SimilarityOverviewMatchGroup from './model/SimilarityOverviewMatchGroup';
import SimilarityOverviewMatchSource from './model/SimilarityOverviewMatchSource';
import SimilarityPutRequest from './model/SimilarityPutRequest';
import SimilarityScoreData from './model/SimilarityScoreData';
import SimilaritySettings from './model/SimilaritySettings';
import SimilaritySettingsModes from './model/SimilaritySettingsModes';
import SimilaritySettingsViewSettings from './model/SimilaritySettingsViewSettings';
import SimilarityViewSettings from './model/SimilarityViewSettings';
import SimilarityViewerUrlResponse from './model/SimilarityViewerUrlResponse';
import SimilarityViewerUrlSettings from './model/SimilarityViewerUrlSettings';
import SimpleSubmissionResponse from './model/SimpleSubmissionResponse';
import SimpleSubmissionResponseAllOf from './model/SimpleSubmissionResponseAllOf';
import Submission from './model/Submission';
import SubmissionAllOf from './model/SubmissionAllOf';
import SubmissionBase from './model/SubmissionBase';
import SubmissionBaseMetadata from './model/SubmissionBaseMetadata';
import SubmissionSizeError from './model/SubmissionSizeError';
import SuccessMessage from './model/SuccessMessage';
import Users from './model/Users';
import ViewerPermissions from './model/ViewerPermissions';
import Webhook from './model/Webhook';
import WebhookAllOf from './model/WebhookAllOf';
import WebhookBase from './model/WebhookBase';
import WebhookPathRequest from './model/WebhookPathRequest';
import WebhookWithSecret from './model/WebhookWithSecret';
import WebhookWithSecretAllOf from './model/WebhookWithSecretAllOf';
import WebhooksMetadata from './model/WebhooksMetadata';
import EULAApi from './api/EULAApi';
import FeaturesApi from './api/FeaturesApi';
import GroupsApi from './api/GroupsApi';
import IndexApi from './api/IndexApi';
import SimilarityApi from './api/SimilarityApi';
import SubmissionApi from './api/SubmissionApi';
import WebhookApi from './api/WebhookApi';


/**
* Turnitin_Core_API__TCA_provides_direct_API_access_to_the_core_functionality_provided_by_Turnitin__TCA_supports_file_submission_similarity_report_generation_group_management_and_visualization_of_report_matches_via_Cloud_Viewer_or_PDF_download_Below_is_the_full_flow_to_successfully_set_up_an_integration_scope_an_API_Key_and_make_calls_to_TCA__Integration_Scope_and_API_Key_management_is_done_via_the_Admin_Console_UI_by_logging_in_as_an_admin_user__For_more_details_go_to_our__developer_portal_documentation_page_https__developers_turnitin_com_docs__Integration_Scope_and_API_Key_ManagementTCA_API_calls_must_provide_an_API_Key_for_authentication_so_you_must_first_have_at_least_one_integration_scope_associated_with_at_least_one_API_Key_to_use_TCA__Admin_Console_UIFirst_login_to_Admin_Console_UI_as_an_Admin_user_with_permission_to_create_Integration_Scopes_under_a_tenant_that_is_licensed_to_use_the_TCA_productIntegration_Scopes__you_can_create_a_new_one_or_add_keys_to_existing___Click_Integrations_in_the_side_bar_____Add_Integration_at_top_the_top_of_the_page____Enter_a_name____Add_Button__API_Keys___Click_Integrations_in_the_side_bar____Create_API_Key_Button_next_to_a_given_Integration_Scope_____Enter_a_name____click_Create_and_View_button___Copy_Save_the_key_manually_or_click_save_to_clipboard_button_to_copy_it__this_is_the_only_time_it_will_show_TCA_Flow____Register_a_webhook____Create_a_submission____Upload_a_file_for_the_submission____Wait_for_the_submission_upload_to_process______If_you_registered_a_webhook_a_callback_will_be_sent_to_it_when_upload_is_complete______The_status_of_the_submission_will_also_update_to_COMPLETE____Request_a_Similarity_Report____Wait_for_similarity_report_to_process______If_you_registered_a_webhook_a_callback_will_be_sent_to_it_when_report_is_complete______The_status_of_the_report_will_also_be_updated_to_COMPLETE____Request_a_URL_with_parameters_to_view_the_Similarity_Report.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TurnitinCoreApi = require('index'); // See note below*.
* var xxxSvc = new TurnitinCoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TurnitinCoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TurnitinCoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TurnitinCoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.225
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddGroupAttachmentRequest model constructor.
     * @property {module:model/AddGroupAttachmentRequest}
     */
    AddGroupAttachmentRequest,

    /**
     * The AddGroupAttachmentResponse model constructor.
     * @property {module:model/AddGroupAttachmentResponse}
     */
    AddGroupAttachmentResponse,

    /**
     * The AggregateGroup model constructor.
     * @property {module:model/AggregateGroup}
     */
    AggregateGroup,

    /**
     * The AuthorMetadataOverride model constructor.
     * @property {module:model/AuthorMetadataOverride}
     */
    AuthorMetadataOverride,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Eula model constructor.
     * @property {module:model/Eula}
     */
    Eula,

    /**
     * The EulaAcceptListItem model constructor.
     * @property {module:model/EulaAcceptListItem}
     */
    EulaAcceptListItem,

    /**
     * The EulaAcceptRequest model constructor.
     * @property {module:model/EulaAcceptRequest}
     */
    EulaAcceptRequest,

    /**
     * The EulaVersion model constructor.
     * @property {module:model/EulaVersion}
     */
    EulaVersion,

    /**
     * The FeaturesEnabled model constructor.
     * @property {module:model/FeaturesEnabled}
     */
    FeaturesEnabled,

    /**
     * The FeaturesGenerationSettings model constructor.
     * @property {module:model/FeaturesGenerationSettings}
     */
    FeaturesGenerationSettings,

    /**
     * The FeaturesSimilarity model constructor.
     * @property {module:model/FeaturesSimilarity}
     */
    FeaturesSimilarity,

    /**
     * The FeaturesSimilarityViewSettings model constructor.
     * @property {module:model/FeaturesSimilarityViewSettings}
     */
    FeaturesSimilarityViewSettings,

    /**
     * The FeaturesTenant model constructor.
     * @property {module:model/FeaturesTenant}
     */
    FeaturesTenant,

    /**
     * The FeaturesViewerModes model constructor.
     * @property {module:model/FeaturesViewerModes}
     */
    FeaturesViewerModes,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupAttachmentResponse model constructor.
     * @property {module:model/GroupAttachmentResponse}
     */
    GroupAttachmentResponse,

    /**
     * The GroupContext model constructor.
     * @property {module:model/GroupContext}
     */
    GroupContext,

    /**
     * The IndexStateSettings model constructor.
     * @property {module:model/IndexStateSettings}
     */
    IndexStateSettings,

    /**
     * The IndexingSettings model constructor.
     * @property {module:model/IndexingSettings}
     */
    IndexingSettings,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The PdfStatusResponse model constructor.
     * @property {module:model/PdfStatusResponse}
     */
    PdfStatusResponse,

    /**
     * The RateLimitError model constructor.
     * @property {module:model/RateLimitError}
     */
    RateLimitError,

    /**
     * The RequestPdfResponse model constructor.
     * @property {module:model/RequestPdfResponse}
     */
    RequestPdfResponse,

    /**
     * The Sidebar model constructor.
     * @property {module:model/Sidebar}
     */
    Sidebar,

    /**
     * The SimilarityGenerationSettings model constructor.
     * @property {module:model/SimilarityGenerationSettings}
     */
    SimilarityGenerationSettings,

    /**
     * The SimilarityMetadata model constructor.
     * @property {module:model/SimilarityMetadata}
     */
    SimilarityMetadata,

    /**
     * The SimilarityMetadataAllOf model constructor.
     * @property {module:model/SimilarityMetadataAllOf}
     */
    SimilarityMetadataAllOf,

    /**
     * The SimilarityMetadataAllOfTopMatches model constructor.
     * @property {module:model/SimilarityMetadataAllOfTopMatches}
     */
    SimilarityMetadataAllOfTopMatches,

    /**
     * The SimilarityOverview model constructor.
     * @property {module:model/SimilarityOverview}
     */
    SimilarityOverview,

    /**
     * The SimilarityOverviewMatchAggregate model constructor.
     * @property {module:model/SimilarityOverviewMatchAggregate}
     */
    SimilarityOverviewMatchAggregate,

    /**
     * The SimilarityOverviewMatchGroup model constructor.
     * @property {module:model/SimilarityOverviewMatchGroup}
     */
    SimilarityOverviewMatchGroup,

    /**
     * The SimilarityOverviewMatchSource model constructor.
     * @property {module:model/SimilarityOverviewMatchSource}
     */
    SimilarityOverviewMatchSource,

    /**
     * The SimilarityPutRequest model constructor.
     * @property {module:model/SimilarityPutRequest}
     */
    SimilarityPutRequest,

    /**
     * The SimilarityScoreData model constructor.
     * @property {module:model/SimilarityScoreData}
     */
    SimilarityScoreData,

    /**
     * The SimilaritySettings model constructor.
     * @property {module:model/SimilaritySettings}
     */
    SimilaritySettings,

    /**
     * The SimilaritySettingsModes model constructor.
     * @property {module:model/SimilaritySettingsModes}
     */
    SimilaritySettingsModes,

    /**
     * The SimilaritySettingsViewSettings model constructor.
     * @property {module:model/SimilaritySettingsViewSettings}
     */
    SimilaritySettingsViewSettings,

    /**
     * The SimilarityViewSettings model constructor.
     * @property {module:model/SimilarityViewSettings}
     */
    SimilarityViewSettings,

    /**
     * The SimilarityViewerUrlResponse model constructor.
     * @property {module:model/SimilarityViewerUrlResponse}
     */
    SimilarityViewerUrlResponse,

    /**
     * The SimilarityViewerUrlSettings model constructor.
     * @property {module:model/SimilarityViewerUrlSettings}
     */
    SimilarityViewerUrlSettings,

    /**
     * The SimpleSubmissionResponse model constructor.
     * @property {module:model/SimpleSubmissionResponse}
     */
    SimpleSubmissionResponse,

    /**
     * The SimpleSubmissionResponseAllOf model constructor.
     * @property {module:model/SimpleSubmissionResponseAllOf}
     */
    SimpleSubmissionResponseAllOf,

    /**
     * The Submission model constructor.
     * @property {module:model/Submission}
     */
    Submission,

    /**
     * The SubmissionAllOf model constructor.
     * @property {module:model/SubmissionAllOf}
     */
    SubmissionAllOf,

    /**
     * The SubmissionBase model constructor.
     * @property {module:model/SubmissionBase}
     */
    SubmissionBase,

    /**
     * The SubmissionBaseMetadata model constructor.
     * @property {module:model/SubmissionBaseMetadata}
     */
    SubmissionBaseMetadata,

    /**
     * The SubmissionSizeError model constructor.
     * @property {module:model/SubmissionSizeError}
     */
    SubmissionSizeError,

    /**
     * The SuccessMessage model constructor.
     * @property {module:model/SuccessMessage}
     */
    SuccessMessage,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
     * The ViewerPermissions model constructor.
     * @property {module:model/ViewerPermissions}
     */
    ViewerPermissions,

    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook,

    /**
     * The WebhookAllOf model constructor.
     * @property {module:model/WebhookAllOf}
     */
    WebhookAllOf,

    /**
     * The WebhookBase model constructor.
     * @property {module:model/WebhookBase}
     */
    WebhookBase,

    /**
     * The WebhookPathRequest model constructor.
     * @property {module:model/WebhookPathRequest}
     */
    WebhookPathRequest,

    /**
     * The WebhookWithSecret model constructor.
     * @property {module:model/WebhookWithSecret}
     */
    WebhookWithSecret,

    /**
     * The WebhookWithSecretAllOf model constructor.
     * @property {module:model/WebhookWithSecretAllOf}
     */
    WebhookWithSecretAllOf,

    /**
     * The WebhooksMetadata model constructor.
     * @property {module:model/WebhooksMetadata}
     */
    WebhooksMetadata,

    /**
    * The EULAApi service constructor.
    * @property {module:api/EULAApi}
    */
    EULAApi,

    /**
    * The FeaturesApi service constructor.
    * @property {module:api/FeaturesApi}
    */
    FeaturesApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The IndexApi service constructor.
    * @property {module:api/IndexApi}
    */
    IndexApi,

    /**
    * The SimilarityApi service constructor.
    * @property {module:api/SimilarityApi}
    */
    SimilarityApi,

    /**
    * The SubmissionApi service constructor.
    * @property {module:api/SubmissionApi}
    */
    SubmissionApi,

    /**
    * The WebhookApi service constructor.
    * @property {module:api/WebhookApi}
    */
    WebhookApi
};
