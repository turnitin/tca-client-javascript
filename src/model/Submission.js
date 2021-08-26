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
import SubmissionAllOf from './SubmissionAllOf';

/**
 * The Submission model module.
 * @module model/Submission
 * @version 1.0.223
 */
class Submission {
    /**
     * Constructs a new <code>Submission</code>.
     * @alias module:model/Submission
     * @implements module:model/SubmissionAllOf
     */
    constructor() { 
        SubmissionAllOf.initialize(this);
        Submission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Submission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Submission} obj Optional instance to populate.
     * @return {module:model/Submission} The populated <code>Submission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Submission();
            SubmissionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
            if (data.hasOwnProperty('word_count')) {
                obj['word_count'] = ApiClient.convertToType(data['word_count'], 'Number');
            }
            if (data.hasOwnProperty('character_count')) {
                obj['character_count'] = ApiClient.convertToType(data['character_count'], 'Number');
            }
            if (data.hasOwnProperty('error_code')) {
                obj['error_code'] = ApiClient.convertToType(data['error_code'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
            }
            if (data.hasOwnProperty('capabilities')) {
                obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * the owner of the submission
 * @member {String} owner
 */
Submission.prototype['owner'] = undefined;

/**
 * the title of the submission
 * @member {String} title
 */
Submission.prototype['title'] = undefined;

/**
 * the current status of the Submission
 * @member {module:model/Submission.StatusEnum} status
 */
Submission.prototype['status'] = undefined;

/**
 * the unique ID of the submission
 * @member {String} id
 */
Submission.prototype['id'] = undefined;

/**
 * the content type of the submission
 * @member {String} content_type
 */
Submission.prototype['content_type'] = undefined;

/**
 * the number of pages in the submission
 * @member {Number} page_count
 */
Submission.prototype['page_count'] = undefined;

/**
 * the number of words in the submission
 * @member {Number} word_count
 */
Submission.prototype['word_count'] = undefined;

/**
 * the number of characters in the submission
 * @member {Number} character_count
 */
Submission.prototype['character_count'] = undefined;

/**
 * an error code representing the type of error encountered (if applicable) 
 * @member {module:model/Submission.ErrorCodeEnum} error_code
 */
Submission.prototype['error_code'] = undefined;

/**
 * RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made. 
 * @member {Date} created_time
 */
Submission.prototype['created_time'] = undefined;

/**
 * Set of capabilities available to the current submission
 * @member {Array.<module:model/Submission.CapabilitiesEnum>} capabilities
 */
Submission.prototype['capabilities'] = undefined;


// Implement SubmissionAllOf interface:
/**
 * the owner of the submission
 * @member {String} owner
 */
SubmissionAllOf.prototype['owner'] = undefined;
/**
 * the title of the submission
 * @member {String} title
 */
SubmissionAllOf.prototype['title'] = undefined;
/**
 * the current status of the Submission
 * @member {module:model/SubmissionAllOf.StatusEnum} status
 */
SubmissionAllOf.prototype['status'] = undefined;
/**
 * the unique ID of the submission
 * @member {String} id
 */
SubmissionAllOf.prototype['id'] = undefined;
/**
 * the content type of the submission
 * @member {String} content_type
 */
SubmissionAllOf.prototype['content_type'] = undefined;
/**
 * the number of pages in the submission
 * @member {Number} page_count
 */
SubmissionAllOf.prototype['page_count'] = undefined;
/**
 * the number of words in the submission
 * @member {Number} word_count
 */
SubmissionAllOf.prototype['word_count'] = undefined;
/**
 * the number of characters in the submission
 * @member {Number} character_count
 */
SubmissionAllOf.prototype['character_count'] = undefined;
/**
 * an error code representing the type of error encountered (if applicable) 
 * @member {module:model/SubmissionAllOf.ErrorCodeEnum} error_code
 */
SubmissionAllOf.prototype['error_code'] = undefined;
/**
 * RFC3339 timestamp of when this submission was initially created. This is the time at which the POST to /submissions was made. 
 * @member {Date} created_time
 */
SubmissionAllOf.prototype['created_time'] = undefined;
/**
 * Set of capabilities available to the current submission
 * @member {Array.<module:model/SubmissionAllOf.CapabilitiesEnum>} capabilities
 */
SubmissionAllOf.prototype['capabilities'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Submission['StatusEnum'] = {

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
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED"
};


/**
 * Allowed values for the <code>error_code</code> property.
 * @enum {String}
 * @readonly
 */
Submission['ErrorCodeEnum'] = {

    /**
     * value: "UNSUPPORTED_FILETYPE"
     * @const
     */
    "UNSUPPORTED_FILETYPE": "UNSUPPORTED_FILETYPE",

    /**
     * value: "PROCESSING_ERROR"
     * @const
     */
    "PROCESSING_ERROR": "PROCESSING_ERROR",

    /**
     * value: "CANNOT_EXTRACT_TEXT"
     * @const
     */
    "CANNOT_EXTRACT_TEXT": "CANNOT_EXTRACT_TEXT",

    /**
     * value: "TOO_LITTLE_TEXT"
     * @const
     */
    "TOO_LITTLE_TEXT": "TOO_LITTLE_TEXT",

    /**
     * value: "TOO_MUCH_TEXT"
     * @const
     */
    "TOO_MUCH_TEXT": "TOO_MUCH_TEXT",

    /**
     * value: "TOO_MANY_PAGES"
     * @const
     */
    "TOO_MANY_PAGES": "TOO_MANY_PAGES",

    /**
     * value: "FILE_LOCKED"
     * @const
     */
    "FILE_LOCKED": "FILE_LOCKED",

    /**
     * value: "CORRUPT_FILE"
     * @const
     */
    "CORRUPT_FILE": "CORRUPT_FILE"
};


/**
 * Allowed values for the <code>capabilities</code> property.
 * @enum {String}
 * @readonly
 */
Submission['CapabilitiesEnum'] = {

    /**
     * value: "INDEX"
     * @const
     */
    "INDEX": "INDEX",

    /**
     * value: "SIMILARITY"
     * @const
     */
    "SIMILARITY": "SIMILARITY",

    /**
     * value: "VIEWER"
     * @const
     */
    "VIEWER": "VIEWER"
};



export default Submission;

