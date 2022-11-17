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
 * The EulaVersion model module.
 * @module model/EulaVersion
 * @version 1.0.258
 */
class EulaVersion {
    /**
     * Constructs a new <code>EulaVersion</code>.
     * @alias module:model/EulaVersion
     */
    constructor() { 
        
        EulaVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EulaVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EulaVersion} obj Optional instance to populate.
     * @return {module:model/EulaVersion} The populated <code>EulaVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EulaVersion();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('valid_from')) {
                obj['valid_from'] = ApiClient.convertToType(data['valid_from'], 'Date');
            }
            if (data.hasOwnProperty('valid_until')) {
                obj['valid_until'] = ApiClient.convertToType(data['valid_until'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('available_languages')) {
                obj['available_languages'] = ApiClient.convertToType(data['available_languages'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EulaVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EulaVersion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['available_languages'])) {
            throw new Error("Expected the field `available_languages` to be an array in the JSON data but got " + data['available_languages']);
        }

        return true;
    }


}



/**
 * The unique name of the EULA Version 
 * @member {String} version
 */
EulaVersion.prototype['version'] = undefined;

/**
 * The starting date indicating when acceptence of this EULA is considered valid 
 * @member {Date} valid_from
 */
EulaVersion.prototype['valid_from'] = undefined;

/**
 * The ending date indicating when acceptence of this EULA is no longer valid 
 * @member {Date} valid_until
 */
EulaVersion.prototype['valid_until'] = undefined;

/**
 * The url where the corresponding EULA page can be found 
 * @member {String} url
 */
EulaVersion.prototype['url'] = undefined;

/**
 * The languages (instances) of this version. 21 language locales are currently supported. 
 * @member {Array.<module:model/EulaVersion.AvailableLanguagesEnum>} available_languages
 */
EulaVersion.prototype['available_languages'] = undefined;





/**
 * Allowed values for the <code>availableLanguages</code> property.
 * @enum {String}
 * @readonly
 */
EulaVersion['AvailableLanguagesEnum'] = {

    /**
     * value: "ar-SA"
     * @const
     */
    "ar-SA": "ar-SA",

    /**
     * value: "cs-CZ"
     * @const
     */
    "cs-CZ": "cs-CZ",

    /**
     * value: "da-DK"
     * @const
     */
    "da-DK": "da-DK",

    /**
     * value: "de-DE"
     * @const
     */
    "de-DE": "de-DE",

    /**
     * value: "el-GR"
     * @const
     */
    "el-GR": "el-GR",

    /**
     * value: "en-US"
     * @const
     */
    "en-US": "en-US",

    /**
     * value: "es-MX"
     * @const
     */
    "es-MX": "es-MX",

    /**
     * value: "fi-FI"
     * @const
     */
    "fi-FI": "fi-FI",

    /**
     * value: "fr-FR"
     * @const
     */
    "fr-FR": "fr-FR",

    /**
     * value: "it-IT"
     * @const
     */
    "it-IT": "it-IT",

    /**
     * value: "ja-JP"
     * @const
     */
    "ja-JP": "ja-JP",

    /**
     * value: "ko-KR"
     * @const
     */
    "ko-KR": "ko-KR",

    /**
     * value: "nb-NO"
     * @const
     */
    "nb-NO": "nb-NO",

    /**
     * value: "nl-NL"
     * @const
     */
    "nl-NL": "nl-NL",

    /**
     * value: "pl-PL"
     * @const
     */
    "pl-PL": "pl-PL",

    /**
     * value: "pt-BR"
     * @const
     */
    "pt-BR": "pt-BR",

    /**
     * value: "ro-RO"
     * @const
     */
    "ro-RO": "ro-RO",

    /**
     * value: "ru-RU"
     * @const
     */
    "ru-RU": "ru-RU",

    /**
     * value: "sv-SE"
     * @const
     */
    "sv-SE": "sv-SE",

    /**
     * value: "tr-TR"
     * @const
     */
    "tr-TR": "tr-TR",

    /**
     * value: "vi-VN"
     * @const
     */
    "vi-VN": "vi-VN",

    /**
     * value: "zh-CN"
     * @const
     */
    "zh-CN": "zh-CN",

    /**
     * value: "zh-TW"
     * @const
     */
    "zh-TW": "zh-TW"
};



export default EulaVersion;

