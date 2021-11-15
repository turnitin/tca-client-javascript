/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.230
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import RateLimitError from '../model/RateLimitError';
import SimpleSubmissionResponse from '../model/SimpleSubmissionResponse';
import Submission from '../model/Submission';
import SubmissionBase from '../model/SubmissionBase';
import SubmissionSizeError from '../model/SubmissionSizeError';
import SuccessMessage from '../model/SuccessMessage';

/**
* Submission service.
* @module api/SubmissionApi
* @version 1.0.230
*/
export default class SubmissionApi {

    /**
    * Constructs a new SubmissionApi. 
    * @alias module:api/SubmissionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSubmission operation.
     * @callback module:api/SubmissionApi~createSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleSubmissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Submission
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {module:model/SubmissionBase} data 
     * @param {module:api/SubmissionApi~createSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleSubmissionResponse}
     */
    createSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, data, callback) {
      let postBody = data;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling createSubmission");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling createSubmission");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createSubmission");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SimpleSubmissionResponse;
      return this.apiClient.callApi(
        '/submissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubmission operation.
     * @callback module:api/SubmissionApi~deleteSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a submission and associated similarity report.
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.hard Accepts true or false indicating either hard or soft delete. A soft delete removes the associated submission report/index and changes the saved submission state to DELETED. A hard deletion completely removes the submission information from Panda and TCA and removes the associated report/index, which can not be recovered.  (default to 'false')
     * @param {module:api/SubmissionApi~deleteSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessMessage}
     */
    deleteSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling deleteSubmission");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling deleteSubmission");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubmission");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'hard': opts['hard']
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
      let returnType = SuccessMessage;
      return this.apiClient.callApi(
        '/submissions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubmiddionDetails operation.
     * @callback module:api/SubmissionApi~getSubmiddionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Submission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Submission Details
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:api/SubmissionApi~getSubmiddionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Submission}
     */
    getSubmiddionDetails(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling getSubmiddionDetails");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling getSubmiddionDetails");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubmiddionDetails");
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
      let returnType = Submission;
      return this.apiClient.callApi(
        '/submissions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recoverSubmission operation.
     * @callback module:api/SubmissionApi~recoverSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleSubmissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recover a soft deleted submission
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:api/SubmissionApi~recoverSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleSubmissionResponse}
     */
    recoverSubmission(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling recoverSubmission");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling recoverSubmission");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recoverSubmission");
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
      let returnType = SimpleSubmissionResponse;
      return this.apiClient.callApi(
        '/submissions/{id}/recover', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadSubmittedFile operation.
     * @callback module:api/SubmissionApi~uploadSubmittedFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Submitted File
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {String} contentType *Must be 'binary/octet-stream' 
     * @param {String} contentDisposition *must include the \"filename\" parameter, e.g. `inline; filename=\"MyFile.docx\"`. To support UTF-8 filenames, you must URL encode the header 
     * @param {Object.<String, Object>} file the user's submitted file
     * @param {module:api/SubmissionApi~uploadSubmittedFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessMessage}
     */
    uploadSubmittedFile(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, contentType, contentDisposition, file, callback) {
      let postBody = file;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling uploadSubmittedFile");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling uploadSubmittedFile");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling uploadSubmittedFile");
      }
      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling uploadSubmittedFile");
      }
      // verify the required parameter 'contentDisposition' is set
      if (contentDisposition === undefined || contentDisposition === null) {
        throw new Error("Missing the required parameter 'contentDisposition' when calling uploadSubmittedFile");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadSubmittedFile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Turnitin-Integration-Name': xTurnitinIntegrationName,
        'X-Turnitin-Integration-Version': xTurnitinIntegrationVersion,
        'Content-Type': contentType,
        'Content-Disposition': contentDisposition
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['binary/octet-stream'];
      let accepts = ['application/json'];
      let returnType = SuccessMessage;
      return this.apiClient.callApi(
        '/submissions/{id}/original', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
