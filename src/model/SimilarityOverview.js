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

import ApiClient from '../ApiClient';
import SimilarityOverviewMatchAggregate from './SimilarityOverviewMatchAggregate';

/**
 * The SimilarityOverview model module.
 * @module model/SimilarityOverview
 * @version 1.0.225
 */
class SimilarityOverview {
    /**
     * Constructs a new <code>SimilarityOverview</code>.
     * @alias module:model/SimilarityOverview
     */
    constructor() { 
        
        SimilarityOverview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimilarityOverview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityOverview} obj Optional instance to populate.
     * @return {module:model/SimilarityOverview} The populated <code>SimilarityOverview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityOverview();

            if (data.hasOwnProperty('submission_id')) {
                obj['submission_id'] = ApiClient.convertToType(data['submission_id'], 'String');
            }
            if (data.hasOwnProperty('overall_match_percentage')) {
                obj['overall_match_percentage'] = ApiClient.convertToType(data['overall_match_percentage'], 'Number');
            }
            if (data.hasOwnProperty('submission_text')) {
                obj['submission_text'] = ApiClient.convertToType(data['submission_text'], 'String');
            }
            if (data.hasOwnProperty('match_aggregates')) {
                obj['match_aggregates'] = ApiClient.convertToType(data['match_aggregates'], [SimilarityOverviewMatchAggregate]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} submission_id
 */
SimilarityOverview.prototype['submission_id'] = undefined;

/**
 * @member {Number} overall_match_percentage
 */
SimilarityOverview.prototype['overall_match_percentage'] = undefined;

/**
 * @member {String} submission_text
 */
SimilarityOverview.prototype['submission_text'] = undefined;

/**
 * @member {Array.<module:model/SimilarityOverviewMatchAggregate>} match_aggregates
 */
SimilarityOverview.prototype['match_aggregates'] = undefined;






export default SimilarityOverview;

