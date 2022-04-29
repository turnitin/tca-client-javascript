/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.246
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SimpleSubmissionResponseAllOf from './SimpleSubmissionResponseAllOf';

/**
 * The SimpleSubmissionResponse model module.
 * @module model/SimpleSubmissionResponse
 * @version 1.0.246
 */
class SimpleSubmissionResponse {
    /**
     * Constructs a new <code>SimpleSubmissionResponse</code>.
     * @alias module:model/SimpleSubmissionResponse
     * @implements module:model/SimpleSubmissionResponseAllOf
     */
    constructor() { 
        SimpleSubmissionResponseAllOf.initialize(this);
        SimpleSubmissionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleSubmissionResponse} obj Optional instance to populate.
     * @return {module:model/SimpleSubmissionResponse} The populated <code>SimpleSubmissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleSubmissionResponse();
            SimpleSubmissionResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * the unique ID of the submission
 * @member {String} id
 */
SimpleSubmissionResponse.prototype['id'] = undefined;

/**
 * the owner of the submission
 * @member {String} owner
 */
SimpleSubmissionResponse.prototype['owner'] = undefined;

/**
 * the title of the submission
 * @member {String} title
 */
SimpleSubmissionResponse.prototype['title'] = undefined;

/**
 * the current status of the Submission
 * @member {module:model/SimpleSubmissionResponse.StatusEnum} status
 */
SimpleSubmissionResponse.prototype['status'] = undefined;

/**
 * RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made. 
 * @member {Date} created_time
 */
SimpleSubmissionResponse.prototype['created_time'] = undefined;


// Implement SimpleSubmissionResponseAllOf interface:
/**
 * the unique ID of the submission
 * @member {String} id
 */
SimpleSubmissionResponseAllOf.prototype['id'] = undefined;
/**
 * the owner of the submission
 * @member {String} owner
 */
SimpleSubmissionResponseAllOf.prototype['owner'] = undefined;
/**
 * the title of the submission
 * @member {String} title
 */
SimpleSubmissionResponseAllOf.prototype['title'] = undefined;
/**
 * the current status of the Submission
 * @member {module:model/SimpleSubmissionResponseAllOf.StatusEnum} status
 */
SimpleSubmissionResponseAllOf.prototype['status'] = undefined;
/**
 * RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made. 
 * @member {Date} created_time
 */
SimpleSubmissionResponseAllOf.prototype['created_time'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SimpleSubmissionResponse['StatusEnum'] = {

    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",

    /**
     * value: "PROCESSING"
     * @const
     */
    "PROCESSING": "PROCESSING",

    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE"
};



export default SimpleSubmissionResponse;

