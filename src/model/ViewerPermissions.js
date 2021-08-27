/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.223
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ViewerPermissions model module.
 * @module model/ViewerPermissions
 * @version 1.0.223
 */
class ViewerPermissions {
    /**
     * Constructs a new <code>ViewerPermissions</code>.
     * @alias module:model/ViewerPermissions
     */
    constructor() { 
        
        ViewerPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewerPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewerPermissions} obj Optional instance to populate.
     * @return {module:model/ViewerPermissions} The populated <code>ViewerPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewerPermissions();

            if (data.hasOwnProperty('may_view_submission_full_source')) {
                obj['may_view_submission_full_source'] = ApiClient.convertToType(data['may_view_submission_full_source'], 'Boolean');
            }
            if (data.hasOwnProperty('may_view_match_submission_info')) {
                obj['may_view_match_submission_info'] = ApiClient.convertToType(data['may_view_match_submission_info'], 'Boolean');
            }
            if (data.hasOwnProperty('may_view_flags_panel')) {
                obj['may_view_flags_panel'] = ApiClient.convertToType(data['may_view_flags_panel'], 'Boolean');
            }
            if (data.hasOwnProperty('may_view_document_details_panel')) {
                obj['may_view_document_details_panel'] = ApiClient.convertToType(data['may_view_document_details_panel'], 'Boolean');
            }
            if (data.hasOwnProperty('may_view_sections_exclusion_panel')) {
                obj['may_view_sections_exclusion_panel'] = ApiClient.convertToType(data['may_view_sections_exclusion_panel'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Optional individual permission which override the default permission set.
 * @member {Boolean} may_view_submission_full_source
 */
ViewerPermissions.prototype['may_view_submission_full_source'] = undefined;

/**
 * Optional individual permission which override the default permission set.
 * @member {Boolean} may_view_match_submission_info
 */
ViewerPermissions.prototype['may_view_match_submission_info'] = undefined;

/**
 * Optional individual permission which override the default permission set
 * @member {Boolean} may_view_flags_panel
 */
ViewerPermissions.prototype['may_view_flags_panel'] = undefined;

/**
 * Optional individual permission which override the default permission set
 * @member {Boolean} may_view_document_details_panel
 */
ViewerPermissions.prototype['may_view_document_details_panel'] = undefined;

/**
 * Optional individual permission which override the default permission set
 * @member {Boolean} may_view_sections_exclusion_panel
 */
ViewerPermissions.prototype['may_view_sections_exclusion_panel'] = undefined;






export default ViewerPermissions;

