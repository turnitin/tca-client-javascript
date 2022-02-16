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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import FeaturesEnabled from '../model/FeaturesEnabled';
import RateLimitError from '../model/RateLimitError';

/**
* Features service.
* @module api/FeaturesApi
* @version 1.0.241
*/
export default class FeaturesApi {

    /**
    * Constructs a new FeaturesApi. 
    * @alias module:api/FeaturesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the featuresEnabledGet operation.
     * @callback module:api/FeaturesApi~featuresEnabledGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeaturesEnabled} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about what features are allowed by the current license
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {module:api/FeaturesApi~featuresEnabledGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeaturesEnabled}
     */
    featuresEnabledGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling featuresEnabledGet");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling featuresEnabledGet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Turnitin-Integration-Name': xTurnitinIntegrationName,
        'X-Turnitin-Integration-Version': xTurnitinIntegrationVersion
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FeaturesEnabled;
      return this.apiClient.callApi(
        '/features-enabled', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
