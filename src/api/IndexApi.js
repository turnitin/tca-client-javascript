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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import IndexStateSettings from '../model/IndexStateSettings';
import RateLimitError from '../model/RateLimitError';

/**
* Index service.
* @module api/IndexApi
* @version 1.0.258
*/
export default class IndexApi {

    /**
    * Constructs a new IndexApi. 
    * @alias module:api/IndexApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getIndexStatus operation.
     * @callback module:api/IndexApi~getIndexStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndexStateSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return index state of submission
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:api/IndexApi~getIndexStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndexStateSettings}
     */
    getIndexStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling getIndexStatus");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling getIndexStatus");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIndexStatus");
      }

      let pathParams = {
        'id': id
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
      let returnType = IndexStateSettings;
      return this.apiClient.callApi(
        '/submissions/{id}/index', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexSubmission operation.
     * @callback module:api/IndexApi~indexSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndexStateSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Index and return index state of submission
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.asynchronous asynchronous request
     * @param {module:api/IndexApi~indexSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndexStateSettings}
     */
    indexSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling indexSubmission");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling indexSubmission");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling indexSubmission");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'asynchronous': opts['asynchronous']
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
      let returnType = IndexStateSettings;
      return this.apiClient.callApi(
        '/submissions/{id}/index', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
