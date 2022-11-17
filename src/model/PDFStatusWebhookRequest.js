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
import SubmissionCompleteWebhookRequestAllOfMetadata from './SubmissionCompleteWebhookRequestAllOfMetadata';

/**
 * The PDFStatusWebhookRequest model module.
 * @module model/PDFStatusWebhookRequest
 * @version 1.0.258
 */
class PDFStatusWebhookRequest {
    /**
     * Constructs a new <code>PDFStatusWebhookRequest</code>.
     * @alias module:model/PDFStatusWebhookRequest
     */
    constructor() { 
        
        PDFStatusWebhookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PDFStatusWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PDFStatusWebhookRequest} obj Optional instance to populate.
     * @return {module:model/PDFStatusWebhookRequest} The populated <code>PDFStatusWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PDFStatusWebhookRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('submission_id')) {
                obj['submission_id'] = ApiClient.convertToType(data['submission_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = SubmissionCompleteWebhookRequestAllOfMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PDFStatusWebhookRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PDFStatusWebhookRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['submission_id'] && !(typeof data['submission_id'] === 'string' || data['submission_id'] instanceof String)) {
            throw new Error("Expected the field `submission_id` to be a primitive type in the JSON string but got " + data['submission_id']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          SubmissionCompleteWebhookRequestAllOfMetadata.validateJSON(data['metadata']);
        }

        return true;
    }


}



/**
 * The requesting Pdf status
 * @member {module:model/PDFStatusWebhookRequest.StatusEnum} status
 */
PDFStatusWebhookRequest.prototype['status'] = undefined;

/**
 * the PDF ID
 * @member {String} id
 */
PDFStatusWebhookRequest.prototype['id'] = undefined;

/**
 * the associated submission ID
 * @member {String} submission_id
 */
PDFStatusWebhookRequest.prototype['submission_id'] = undefined;

/**
 * @member {module:model/SubmissionCompleteWebhookRequestAllOfMetadata} metadata
 */
PDFStatusWebhookRequest.prototype['metadata'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PDFStatusWebhookRequest['StatusEnum'] = {

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default PDFStatusWebhookRequest;
