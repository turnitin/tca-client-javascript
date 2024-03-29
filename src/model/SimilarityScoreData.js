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
 * The SimilarityScoreData model module.
 * @module model/SimilarityScoreData
 * @version 1.0.258
 */
class SimilarityScoreData {
    /**
     * Constructs a new <code>SimilarityScoreData</code>.
     * @alias module:model/SimilarityScoreData
     * @param overallMatchPercentage {Number} Represents the percentage match against all sources
     */
    constructor(overallMatchPercentage) { 
        
        SimilarityScoreData.initialize(this, overallMatchPercentage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, overallMatchPercentage) { 
        obj['overall_match_percentage'] = overallMatchPercentage;
    }

    /**
     * Constructs a <code>SimilarityScoreData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityScoreData} obj Optional instance to populate.
     * @return {module:model/SimilarityScoreData} The populated <code>SimilarityScoreData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityScoreData();

            if (data.hasOwnProperty('overall_match_percentage')) {
                obj['overall_match_percentage'] = ApiClient.convertToType(data['overall_match_percentage'], 'Number');
            }
            if (data.hasOwnProperty('internet_match_percentage')) {
                obj['internet_match_percentage'] = ApiClient.convertToType(data['internet_match_percentage'], 'Number');
            }
            if (data.hasOwnProperty('publication_match_percentage')) {
                obj['publication_match_percentage'] = ApiClient.convertToType(data['publication_match_percentage'], 'Number');
            }
            if (data.hasOwnProperty('submitted_works_match_percentage')) {
                obj['submitted_works_match_percentage'] = ApiClient.convertToType(data['submitted_works_match_percentage'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimilarityScoreData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimilarityScoreData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SimilarityScoreData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SimilarityScoreData.RequiredProperties = ["overall_match_percentage"];

/**
 * Represents the percentage match against all sources
 * @member {Number} overall_match_percentage
 */
SimilarityScoreData.prototype['overall_match_percentage'] = undefined;

/**
 * Represents the percentage match against internet
 * @member {Number} internet_match_percentage
 */
SimilarityScoreData.prototype['internet_match_percentage'] = undefined;

/**
 * Represents the percentage match against all publications
 * @member {Number} publication_match_percentage
 */
SimilarityScoreData.prototype['publication_match_percentage'] = undefined;

/**
 * Represents the percentage match against all submitted works
 * @member {Number} submitted_works_match_percentage
 */
SimilarityScoreData.prototype['submitted_works_match_percentage'] = undefined;






export default SimilarityScoreData;

