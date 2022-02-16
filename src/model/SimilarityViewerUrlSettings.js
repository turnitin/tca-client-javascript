/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.241
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthorMetadataOverride from './AuthorMetadataOverride';
import Eula from './Eula';
import Sidebar from './Sidebar';
import SimilaritySettings from './SimilaritySettings';
import ViewerPermissions from './ViewerPermissions';

/**
 * The SimilarityViewerUrlSettings model module.
 * @module model/SimilarityViewerUrlSettings
 * @version 1.0.241
 */
class SimilarityViewerUrlSettings {
    /**
     * Constructs a new <code>SimilarityViewerUrlSettings</code>.
     * @alias module:model/SimilarityViewerUrlSettings
     */
    constructor() { 
        
        SimilarityViewerUrlSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimilarityViewerUrlSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityViewerUrlSettings} obj Optional instance to populate.
     * @return {module:model/SimilarityViewerUrlSettings} The populated <code>SimilarityViewerUrlSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityViewerUrlSettings();

            if (data.hasOwnProperty('author_metadata_override')) {
                obj['author_metadata_override'] = AuthorMetadataOverride.constructFromObject(data['author_metadata_override']);
            }
            if (data.hasOwnProperty('viewer_user_id')) {
                obj['viewer_user_id'] = ApiClient.convertToType(data['viewer_user_id'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('viewer_default_permission_set')) {
                obj['viewer_default_permission_set'] = ApiClient.convertToType(data['viewer_default_permission_set'], 'String');
            }
            if (data.hasOwnProperty('viewer_permissions')) {
                obj['viewer_permissions'] = ViewerPermissions.constructFromObject(data['viewer_permissions']);
            }
            if (data.hasOwnProperty('eula')) {
                obj['eula'] = Eula.constructFromObject(data['eula']);
            }
            if (data.hasOwnProperty('sidebar')) {
                obj['sidebar'] = Sidebar.constructFromObject(data['sidebar']);
            }
            if (data.hasOwnProperty('similarity')) {
                obj['similarity'] = SimilaritySettings.constructFromObject(data['similarity']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AuthorMetadataOverride} author_metadata_override
 */
SimilarityViewerUrlSettings.prototype['author_metadata_override'] = undefined;

/**
 * viewer's user ID
 * @member {String} viewer_user_id
 */
SimilarityViewerUrlSettings.prototype['viewer_user_id'] = undefined;

/**
 * two character locale language setting (e.g. 'en' or 'de') or full value
 * @member {module:model/SimilarityViewerUrlSettings.LocaleEnum} locale
 */
SimilarityViewerUrlSettings.prototype['locale'] = undefined;

/**
 * Default viewer permission set, accepts INSTRUCTOR, LEARNER, EDITOR, USER, APPLICANT, ADMINISTRATOR, UNDEFINED
 * @member {String} viewer_default_permission_set
 */
SimilarityViewerUrlSettings.prototype['viewer_default_permission_set'] = undefined;

/**
 * @member {module:model/ViewerPermissions} viewer_permissions
 */
SimilarityViewerUrlSettings.prototype['viewer_permissions'] = undefined;

/**
 * @member {module:model/Eula} eula
 */
SimilarityViewerUrlSettings.prototype['eula'] = undefined;

/**
 * @member {module:model/Sidebar} sidebar
 */
SimilarityViewerUrlSettings.prototype['sidebar'] = undefined;

/**
 * @member {module:model/SimilaritySettings} similarity
 */
SimilarityViewerUrlSettings.prototype['similarity'] = undefined;





/**
 * Allowed values for the <code>locale</code> property.
 * @enum {String}
 * @readonly
 */
SimilarityViewerUrlSettings['LocaleEnum'] = {

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



export default SimilarityViewerUrlSettings;

