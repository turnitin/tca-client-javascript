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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import EulaAcceptListItem from '../model/EulaAcceptListItem';
import EulaAcceptRequest from '../model/EulaAcceptRequest';
import EulaVersion from '../model/EulaVersion';
import RateLimitError from '../model/RateLimitError';

/**
* EULA service.
* @module api/EULAApi
* @version 1.0.246
*/
export default class EULAApi {

    /**
    * Constructs a new EULAApi. 
    * @alias module:api/EULAApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the eulaVersionIdAcceptPost operation.
     * @callback module:api/EULAApi~eulaVersionIdAcceptPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EulaAcceptListItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accepts a particular EULA version on behalf of an external user
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} versionId The EULA version ID (or `latest`) 
     * @param {module:model/EulaAcceptRequest} data 
     * @param {module:api/EULAApi~eulaVersionIdAcceptPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EulaAcceptListItem}
     */
    eulaVersionIdAcceptPost(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, data, callback) {
      let postBody = data;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling eulaVersionIdAcceptPost");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling eulaVersionIdAcceptPost");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling eulaVersionIdAcceptPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eulaVersionIdAcceptPost");
      }

      let pathParams = {
        'version_id': versionId
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EulaAcceptListItem;
      return this.apiClient.callApi(
        '/eula/{version_id}/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eulaVersionIdAcceptUserIdGet operation.
     * @callback module:api/EULAApi~eulaVersionIdAcceptUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EulaAcceptListItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Queries the acceptences of a particular EULA version on behalf of an external user
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} versionId The EULA version ID (or `latest`) 
     * @param {String} userId The user associated with the EULA status 
     * @param {module:api/EULAApi~eulaVersionIdAcceptUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EulaAcceptListItem>}
     */
    eulaVersionIdAcceptUserIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, userId, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling eulaVersionIdAcceptUserIdGet");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling eulaVersionIdAcceptUserIdGet");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling eulaVersionIdAcceptUserIdGet");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling eulaVersionIdAcceptUserIdGet");
      }

      let pathParams = {
        'version_id': versionId,
        'user_id': userId
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
      let returnType = [EulaAcceptListItem];
      return this.apiClient.callApi(
        '/eula/{version_id}/accept/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eulaVersionIdGet operation.
     * @callback module:api/EULAApi~eulaVersionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EulaVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets information about a particular EULA version
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} versionId The EULA version ID (or `latest`) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang The desired language of the specified EULA version
     * @param {module:api/EULAApi~eulaVersionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EulaVersion}
     */
    eulaVersionIdGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling eulaVersionIdGet");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling eulaVersionIdGet");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling eulaVersionIdGet");
      }

      let pathParams = {
        'version_id': versionId
      };
      let queryParams = {
        'lang': opts['lang']
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
      let returnType = EulaVersion;
      return this.apiClient.callApi(
        '/eula/{version_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eulaVersionIdViewGet operation.
     * @callback module:api/EULAApi~eulaVersionIdViewGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the text of a particular EULA version
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} versionId The EULA version ID (or `latest`) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang The desired language of the specified EULA version
     * @param {module:api/EULAApi~eulaVersionIdViewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    eulaVersionIdViewGet(xTurnitinIntegrationName, xTurnitinIntegrationVersion, versionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling eulaVersionIdViewGet");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling eulaVersionIdViewGet");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling eulaVersionIdViewGet");
      }

      let pathParams = {
        'version_id': versionId
      };
      let queryParams = {
        'lang': opts['lang']
      };
      let headerParams = {
        'X-Turnitin-Integration-Name': xTurnitinIntegrationName,
        'X-Turnitin-Integration-Version': xTurnitinIntegrationVersion
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['text/plain; charset=utf-8', 'application/html'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/eula/{version_id}/view', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
