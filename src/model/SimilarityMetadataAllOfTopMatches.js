/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.238
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SimilarityMetadataAllOfTopMatches model module.
 * @module model/SimilarityMetadataAllOfTopMatches
 * @version 1.0.238
 */
class SimilarityMetadataAllOfTopMatches {
    /**
     * Constructs a new <code>SimilarityMetadataAllOfTopMatches</code>.
     * @alias module:model/SimilarityMetadataAllOfTopMatches
     */
    constructor() { 
        
        SimilarityMetadataAllOfTopMatches.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimilarityMetadataAllOfTopMatches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityMetadataAllOfTopMatches} obj Optional instance to populate.
     * @return {module:model/SimilarityMetadataAllOfTopMatches} The populated <code>SimilarityMetadataAllOfTopMatches</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityMetadataAllOfTopMatches();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('submission_id')) {
                obj['submission_id'] = ApiClient.convertToType(data['submission_id'], 'String');
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('matched_word_count_total')) {
                obj['matched_word_count_total'] = ApiClient.convertToType(data['matched_word_count_total'], 'Number');
            }
            if (data.hasOwnProperty('submitted_date')) {
                obj['submitted_date'] = ApiClient.convertToType(data['submitted_date'], 'String');
            }
            if (data.hasOwnProperty('institution_name')) {
                obj['institution_name'] = ApiClient.convertToType(data['institution_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Source name
 * @member {String} name
 */
SimilarityMetadataAllOfTopMatches.prototype['name'] = undefined;

/**
 * Match percentage
 * @member {Number} percentage
 */
SimilarityMetadataAllOfTopMatches.prototype['percentage'] = undefined;

/**
 * Matching submission id
 * @member {String} submission_id
 */
SimilarityMetadataAllOfTopMatches.prototype['submission_id'] = undefined;

/**
 * Matching submission source type (INTERNET, PUBLICATION, SUBMITTED_WORK)
 * @member {String} source_type
 */
SimilarityMetadataAllOfTopMatches.prototype['source_type'] = undefined;

/**
 * number of matching words
 * @member {Number} matched_word_count_total
 */
SimilarityMetadataAllOfTopMatches.prototype['matched_word_count_total'] = undefined;

/**
 * date match was submitted
 * @member {String} submitted_date
 */
SimilarityMetadataAllOfTopMatches.prototype['submitted_date'] = undefined;

/**
 * intitution name for matched SUBMITTED_WORK types
 * @member {String} institution_name
 */
SimilarityMetadataAllOfTopMatches.prototype['institution_name'] = undefined;






export default SimilarityMetadataAllOfTopMatches;

