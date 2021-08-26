/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. It supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file to the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
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
 * The WebhookPathRequest model module.
 * @module model/WebhookPathRequest
 * @version 1.0.223
 */
class WebhookPathRequest {
    /**
     * Constructs a new <code>WebhookPathRequest</code>.
     * @alias module:model/WebhookPathRequest
     * @param eventTypes {Array.<module:model/WebhookPathRequest.EventTypesEnum>} an array of the types of callbacks that will be sent to this webhook
     */
    constructor(eventTypes) { 
        
        WebhookPathRequest.initialize(this, eventTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTypes) { 
        obj['event_types'] = eventTypes;
    }

    /**
     * Constructs a <code>WebhookPathRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookPathRequest} obj Optional instance to populate.
     * @return {module:model/WebhookPathRequest} The populated <code>WebhookPathRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookPathRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('event_types')) {
                obj['event_types'] = ApiClient.convertToType(data['event_types'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * a human readable description of the webhook
 * @member {String} description
 */
WebhookPathRequest.prototype['description'] = undefined;

/**
 * an array of the types of callbacks that will be sent to this webhook
 * @member {Array.<module:model/WebhookPathRequest.EventTypesEnum>} event_types
 */
WebhookPathRequest.prototype['event_types'] = undefined;





/**
 * Allowed values for the <code>eventTypes</code> property.
 * @enum {String}
 * @readonly
 */
WebhookPathRequest['EventTypesEnum'] = {

    /**
     * value: "SUBMISSION_COMPLETE"
     * @const
     */
    "SUBMISSION_COMPLETE": "SUBMISSION_COMPLETE",

    /**
     * value: "SIMILARITY_COMPLETE"
     * @const
     */
    "SIMILARITY_COMPLETE": "SIMILARITY_COMPLETE",

    /**
     * value: "SIMILARITY_UPDATED"
     * @const
     */
    "SIMILARITY_UPDATED": "SIMILARITY_UPDATED",

    /**
     * value: "PDF_STATUS"
     * @const
     */
    "PDF_STATUS": "PDF_STATUS",

    /**
     * value: "GROUP_ATTACHMENT_COMPLETE"
     * @const
     */
    "GROUP_ATTACHMENT_COMPLETE": "GROUP_ATTACHMENT_COMPLETE"
};



export default WebhookPathRequest;

