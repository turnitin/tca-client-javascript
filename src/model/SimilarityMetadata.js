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
import SimilarityMetadataAllOf from './SimilarityMetadataAllOf';
import SimilarityMetadataAllOfTopMatches from './SimilarityMetadataAllOfTopMatches';
import SimilarityScoreData from './SimilarityScoreData';

/**
 * The SimilarityMetadata model module.
 * @module model/SimilarityMetadata
 * @version 1.0.238
 */
class SimilarityMetadata {
    /**
     * Constructs a new <code>SimilarityMetadata</code>.
     * @alias module:model/SimilarityMetadata
     * @implements module:model/SimilarityScoreData
     * @implements module:model/SimilarityMetadataAllOf
     * @param overallMatchPercentage {Number} Represents the percentage match against all sources
     * @param submissionId {String} 
     * @param status {String} possible values PENDING, COMPLETE
     * @param timeGenerated {String} Time the report finished generating.  If not set the report has not finished generating
     * @param timeRequested {String} Time the report was requested
     * @param topMatches {Array.<module:model/SimilarityMetadataAllOfTopMatches>} Top matches
     * @param topSourceLargestMatchedWordCount {Number} Largest individual matched word count, 0 if there isn't a match to this submission.
     */
    constructor(overallMatchPercentage, submissionId, status, timeGenerated, timeRequested, topMatches, topSourceLargestMatchedWordCount) { 
        SimilarityScoreData.initialize(this, overallMatchPercentage);SimilarityMetadataAllOf.initialize(this, submissionId, status, timeGenerated, timeRequested, topMatches, topSourceLargestMatchedWordCount);
        SimilarityMetadata.initialize(this, overallMatchPercentage, submissionId, status, timeGenerated, timeRequested, topMatches, topSourceLargestMatchedWordCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, overallMatchPercentage, submissionId, status, timeGenerated, timeRequested, topMatches, topSourceLargestMatchedWordCount) { 
        obj['overall_match_percentage'] = overallMatchPercentage;
        obj['submission_id'] = submissionId;
        obj['status'] = status;
        obj['time_generated'] = timeGenerated;
        obj['time_requested'] = timeRequested;
        obj['top_matches'] = topMatches;
        obj['top_source_largest_matched_word_count'] = topSourceLargestMatchedWordCount;
    }

    /**
     * Constructs a <code>SimilarityMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityMetadata} obj Optional instance to populate.
     * @return {module:model/SimilarityMetadata} The populated <code>SimilarityMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityMetadata();
            SimilarityScoreData.constructFromObject(data, obj);
            SimilarityMetadataAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('submission_id')) {
                obj['submission_id'] = ApiClient.convertToType(data['submission_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('time_generated')) {
                obj['time_generated'] = ApiClient.convertToType(data['time_generated'], 'String');
            }
            if (data.hasOwnProperty('time_requested')) {
                obj['time_requested'] = ApiClient.convertToType(data['time_requested'], 'String');
            }
            if (data.hasOwnProperty('top_matches')) {
                obj['top_matches'] = ApiClient.convertToType(data['top_matches'], [SimilarityMetadataAllOfTopMatches]);
            }
            if (data.hasOwnProperty('top_source_largest_matched_word_count')) {
                obj['top_source_largest_matched_word_count'] = ApiClient.convertToType(data['top_source_largest_matched_word_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the percentage match against all sources
 * @member {Number} overall_match_percentage
 */
SimilarityMetadata.prototype['overall_match_percentage'] = undefined;

/**
 * Represents the percentage match against internet
 * @member {Number} internet_match_percentage
 */
SimilarityMetadata.prototype['internet_match_percentage'] = undefined;

/**
 * Represents the percentage match against all publications
 * @member {Number} publication_match_percentage
 */
SimilarityMetadata.prototype['publication_match_percentage'] = undefined;

/**
 * Represents the percentage match against all submitted works
 * @member {Number} submitted_works_match_percentage
 */
SimilarityMetadata.prototype['submitted_works_match_percentage'] = undefined;

/**
 * @member {String} submission_id
 */
SimilarityMetadata.prototype['submission_id'] = undefined;

/**
 * possible values PENDING, COMPLETE
 * @member {String} status
 */
SimilarityMetadata.prototype['status'] = undefined;

/**
 * Time the report finished generating.  If not set the report has not finished generating
 * @member {String} time_generated
 */
SimilarityMetadata.prototype['time_generated'] = undefined;

/**
 * Time the report was requested
 * @member {String} time_requested
 */
SimilarityMetadata.prototype['time_requested'] = undefined;

/**
 * Top matches
 * @member {Array.<module:model/SimilarityMetadataAllOfTopMatches>} top_matches
 */
SimilarityMetadata.prototype['top_matches'] = undefined;

/**
 * Largest individual matched word count, 0 if there isn't a match to this submission.
 * @member {Number} top_source_largest_matched_word_count
 */
SimilarityMetadata.prototype['top_source_largest_matched_word_count'] = undefined;


// Implement SimilarityScoreData interface:
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
// Implement SimilarityMetadataAllOf interface:
/**
 * @member {String} submission_id
 */
SimilarityMetadataAllOf.prototype['submission_id'] = undefined;
/**
 * possible values PENDING, COMPLETE
 * @member {String} status
 */
SimilarityMetadataAllOf.prototype['status'] = undefined;
/**
 * Time the report finished generating.  If not set the report has not finished generating
 * @member {String} time_generated
 */
SimilarityMetadataAllOf.prototype['time_generated'] = undefined;
/**
 * Time the report was requested
 * @member {String} time_requested
 */
SimilarityMetadataAllOf.prototype['time_requested'] = undefined;
/**
 * Top matches
 * @member {Array.<module:model/SimilarityMetadataAllOfTopMatches>} top_matches
 */
SimilarityMetadataAllOf.prototype['top_matches'] = undefined;
/**
 * Largest individual matched word count, 0 if there isn't a match to this submission.
 * @member {Number} top_source_largest_matched_word_count
 */
SimilarityMetadataAllOf.prototype['top_source_largest_matched_word_count'] = undefined;




export default SimilarityMetadata;

