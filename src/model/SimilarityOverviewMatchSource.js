/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. It supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI, by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file to the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.220
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SimilarityOverviewMatchGroup from './SimilarityOverviewMatchGroup';

/**
 * The SimilarityOverviewMatchSource model module.
 * @module model/SimilarityOverviewMatchSource
 * @version 1.0.220
 */
class SimilarityOverviewMatchSource {
    /**
     * Constructs a new <code>SimilarityOverviewMatchSource</code>.
     * @alias module:model/SimilarityOverviewMatchSource
     */
    constructor() { 
        
        SimilarityOverviewMatchSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimilarityOverviewMatchSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityOverviewMatchSource} obj Optional instance to populate.
     * @return {module:model/SimilarityOverviewMatchSource} The populated <code>SimilarityOverviewMatchSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityOverviewMatchSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('institution_name')) {
                obj['institution_name'] = ApiClient.convertToType(data['institution_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('download_date')) {
                obj['download_date'] = ApiClient.convertToType(data['download_date'], 'String');
            }
            if (data.hasOwnProperty('submitted_date')) {
                obj['submitted_date'] = ApiClient.convertToType(data['submitted_date'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('submission_id')) {
                obj['submission_id'] = ApiClient.convertToType(data['submission_id'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('match_groups')) {
                obj['match_groups'] = ApiClient.convertToType(data['match_groups'], [SimilarityOverviewMatchGroup]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} source_type
 */
SimilarityOverviewMatchSource.prototype['source_type'] = undefined;

/**
 * @member {String} institution_name
 */
SimilarityOverviewMatchSource.prototype['institution_name'] = undefined;

/**
 * @member {String} description
 */
SimilarityOverviewMatchSource.prototype['description'] = undefined;

/**
 * @member {String} download_date
 */
SimilarityOverviewMatchSource.prototype['download_date'] = undefined;

/**
 * @member {String} submitted_date
 */
SimilarityOverviewMatchSource.prototype['submitted_date'] = undefined;

/**
 * @member {String} link
 */
SimilarityOverviewMatchSource.prototype['link'] = undefined;

/**
 * @member {String} source_id
 */
SimilarityOverviewMatchSource.prototype['source_id'] = undefined;

/**
 * @member {String} submission_id
 */
SimilarityOverviewMatchSource.prototype['submission_id'] = undefined;

/**
 * @member {Number} percent
 */
SimilarityOverviewMatchSource.prototype['percent'] = undefined;

/**
 * @member {String} visibility
 */
SimilarityOverviewMatchSource.prototype['visibility'] = undefined;

/**
 * @member {Array.<module:model/SimilarityOverviewMatchGroup>} match_groups
 */
SimilarityOverviewMatchSource.prototype['match_groups'] = undefined;






export default SimilarityOverviewMatchSource;

