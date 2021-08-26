/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file to the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
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
import FeaturesSimilarity from './FeaturesSimilarity';
import FeaturesTenant from './FeaturesTenant';

/**
 * The FeaturesEnabled model module.
 * @module model/FeaturesEnabled
 * @version 1.0.223
 */
class FeaturesEnabled {
    /**
     * Constructs a new <code>FeaturesEnabled</code>.
     * @alias module:model/FeaturesEnabled
     */
    constructor() { 
        
        FeaturesEnabled.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeaturesEnabled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeaturesEnabled} obj Optional instance to populate.
     * @return {module:model/FeaturesEnabled} The populated <code>FeaturesEnabled</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeaturesEnabled();

            if (data.hasOwnProperty('similarity')) {
                obj['similarity'] = FeaturesSimilarity.constructFromObject(data['similarity']);
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = FeaturesTenant.constructFromObject(data['tenant']);
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('access_options')) {
                obj['access_options'] = ApiClient.convertToType(data['access_options'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FeaturesSimilarity} similarity
 */
FeaturesEnabled.prototype['similarity'] = undefined;

/**
 * @member {module:model/FeaturesTenant} tenant
 */
FeaturesEnabled.prototype['tenant'] = undefined;

/**
 * @member {String} product_name
 */
FeaturesEnabled.prototype['product_name'] = undefined;

/**
 * @member {Array.<module:model/FeaturesEnabled.AccessOptionsEnum>} access_options
 */
FeaturesEnabled.prototype['access_options'] = undefined;





/**
 * Allowed values for the <code>accessOptions</code> property.
 * @enum {String}
 * @readonly
 */
FeaturesEnabled['AccessOptionsEnum'] = {

    /**
     * value: "Native"
     * @const
     */
    "Native": "Native",

    /**
     * value: "CORE_API"
     * @const
     */
    "CORE_API": "CORE_API",

    /**
     * value: "Draft Coach"
     * @const
     */
    "Draft Coach": "Draft Coach"
};



export default FeaturesEnabled;

