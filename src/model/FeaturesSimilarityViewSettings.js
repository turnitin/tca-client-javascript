/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.258
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FeaturesSimilarityViewSettings model module.
 * @module model/FeaturesSimilarityViewSettings
 * @version 1.0.258
 */
class FeaturesSimilarityViewSettings {
    /**
     * Constructs a new <code>FeaturesSimilarityViewSettings</code>.
     * @alias module:model/FeaturesSimilarityViewSettings
     */
    constructor() { 
        
        FeaturesSimilarityViewSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeaturesSimilarityViewSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeaturesSimilarityViewSettings} obj Optional instance to populate.
     * @return {module:model/FeaturesSimilarityViewSettings} The populated <code>FeaturesSimilarityViewSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeaturesSimilarityViewSettings();

            if (data.hasOwnProperty('exclude_quotes')) {
                obj['exclude_quotes'] = ApiClient.convertToType(data['exclude_quotes'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_bibliography')) {
                obj['exclude_bibliography'] = ApiClient.convertToType(data['exclude_bibliography'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_citations')) {
                obj['exclude_citations'] = ApiClient.convertToType(data['exclude_citations'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_abstract')) {
                obj['exclude_abstract'] = ApiClient.convertToType(data['exclude_abstract'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_methods')) {
                obj['exclude_methods'] = ApiClient.convertToType(data['exclude_methods'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_small_matches')) {
                obj['exclude_small_matches'] = ApiClient.convertToType(data['exclude_small_matches'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_internet')) {
                obj['exclude_internet'] = ApiClient.convertToType(data['exclude_internet'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_publications')) {
                obj['exclude_publications'] = ApiClient.convertToType(data['exclude_publications'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_crossref')) {
                obj['exclude_crossref'] = ApiClient.convertToType(data['exclude_crossref'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_crossref_posted_content')) {
                obj['exclude_crossref_posted_content'] = ApiClient.convertToType(data['exclude_crossref_posted_content'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_submitted_works')) {
                obj['exclude_submitted_works'] = ApiClient.convertToType(data['exclude_submitted_works'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_custom_sections')) {
                obj['exclude_custom_sections'] = ApiClient.convertToType(data['exclude_custom_sections'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_preprints')) {
                obj['exclude_preprints'] = ApiClient.convertToType(data['exclude_preprints'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeaturesSimilarityViewSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeaturesSimilarityViewSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * If set to true, text in quotes will not count as similar content 
 * @member {Boolean} exclude_quotes
 */
FeaturesSimilarityViewSettings.prototype['exclude_quotes'] = undefined;

/**
 * If set to true, text in a bibliography section will not count as similar content 
 * @member {Boolean} exclude_bibliography
 */
FeaturesSimilarityViewSettings.prototype['exclude_bibliography'] = undefined;

/**
 * If set to true, text in citations will not count as similar content 
 * @member {Boolean} exclude_citations
 */
FeaturesSimilarityViewSettings.prototype['exclude_citations'] = undefined;

/**
 * If set to true, text in the abstract section of the submission will not count as similar content 
 * @member {Boolean} exclude_abstract
 */
FeaturesSimilarityViewSettings.prototype['exclude_abstract'] = undefined;

/**
 * If set to true, text in the method section of the submission will not count as similar content 
 * @member {Boolean} exclude_methods
 */
FeaturesSimilarityViewSettings.prototype['exclude_methods'] = undefined;

/**
 * If set, similarity matches that match less than the specified amount of words will not count as similar content 
 * @member {Boolean} exclude_small_matches
 */
FeaturesSimilarityViewSettings.prototype['exclude_small_matches'] = undefined;

/**
 * If set to true, text matched to the internet collection will not count as similar content 
 * @member {Boolean} exclude_internet
 */
FeaturesSimilarityViewSettings.prototype['exclude_internet'] = undefined;

/**
 * If set to true, text matched to the publications collection will not count as similar content 
 * @member {Boolean} exclude_publications
 */
FeaturesSimilarityViewSettings.prototype['exclude_publications'] = undefined;

/**
 * If set to true, text matched to the Crossref collection will not count as similar content 
 * @member {Boolean} exclude_crossref
 */
FeaturesSimilarityViewSettings.prototype['exclude_crossref'] = undefined;

/**
 * If set to true, text matched to the Crossref Posted Content collection will not count as similar content 
 * @member {Boolean} exclude_crossref_posted_content
 */
FeaturesSimilarityViewSettings.prototype['exclude_crossref_posted_content'] = undefined;

/**
 * If set to true, text matched to the submitted works collection will not count as similar content calculated as if submitted work was not part of the paper 
 * @member {Boolean} exclude_submitted_works
 */
FeaturesSimilarityViewSettings.prototype['exclude_submitted_works'] = undefined;

/**
 * If set to true, text matched to the custom sections defined in the admin settings will not count as similar content calculated as if section was not part of the paper 
 * @member {Boolean} exclude_custom_sections
 */
FeaturesSimilarityViewSettings.prototype['exclude_custom_sections'] = undefined;

/**
 * If set to true, it will exclude preprints. A preprint is a version of a scholarly or scientific paper that precedes formal peer review and publication in a peer-reviewed scholarly or scientific journal. 
 * @member {Boolean} exclude_preprints
 */
FeaturesSimilarityViewSettings.prototype['exclude_preprints'] = undefined;






export default FeaturesSimilarityViewSettings;

