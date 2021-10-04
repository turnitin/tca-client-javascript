/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.226
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import PdfStatusResponse from '../model/PdfStatusResponse';
import RateLimitError from '../model/RateLimitError';
import RequestPdfResponse from '../model/RequestPdfResponse';
import SimilarityMetadata from '../model/SimilarityMetadata';
import SimilarityPutRequest from '../model/SimilarityPutRequest';
import SimilarityViewerUrlResponse from '../model/SimilarityViewerUrlResponse';
import SimilarityViewerUrlSettings from '../model/SimilarityViewerUrlSettings';
import SuccessMessage from '../model/SuccessMessage';

/**
* Similarity service.
* @module api/SimilarityApi
* @version 1.0.226
*/
export default class SimilarityApi {

    /**
    * Constructs a new SimilarityApi. 
    * @alias module:api/SimilarityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the downloadSimilarityReportPdf operation.
     * @callback module:api/SimilarityApi~downloadSimilarityReportPdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GET download pdf
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {String} pdfId The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf) 
     * @param {module:api/SimilarityApi~downloadSimilarityReportPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    downloadSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling downloadSimilarityReportPdf");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling downloadSimilarityReportPdf");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadSimilarityReportPdf");
      }
      // verify the required parameter 'pdfId' is set
      if (pdfId === undefined || pdfId === null) {
        throw new Error("Missing the required parameter 'pdfId' when calling downloadSimilarityReportPdf");
      }

      let pathParams = {
        'id': id,
        'pdf_id': pdfId
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
      let accepts = ['application/pdf', 'application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/submissions/{id}/similarity/pdf/{pdf_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSimilarityReportPdfStatus operation.
     * @callback module:api/SimilarityApi~getSimilarityReportPdfStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PdfStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GET pdf download status
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {String} pdfId The Pdf ID (returned upon a successful POST to /submissions/{submission_id}/similarity/pdf) 
     * @param {module:api/SimilarityApi~getSimilarityReportPdfStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PdfStatusResponse}
     */
    getSimilarityReportPdfStatus(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, pdfId, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling getSimilarityReportPdfStatus");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling getSimilarityReportPdfStatus");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSimilarityReportPdfStatus");
      }
      // verify the required parameter 'pdfId' is set
      if (pdfId === undefined || pdfId === null) {
        throw new Error("Missing the required parameter 'pdfId' when calling getSimilarityReportPdfStatus");
      }

      let pathParams = {
        'id': id,
        'pdf_id': pdfId
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
      let returnType = PdfStatusResponse;
      return this.apiClient.callApi(
        '/submissions/{id}/similarity/pdf/{pdf_id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSimilarityReportResults operation.
     * @callback module:api/SimilarityApi~getSimilarityReportResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimilarityMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Similarity Report Results
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:api/SimilarityApi~getSimilarityReportResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimilarityMetadata}
     */
    getSimilarityReportResults(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling getSimilarityReportResults");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling getSimilarityReportResults");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSimilarityReportResults");
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
      let returnType = SimilarityMetadata;
      return this.apiClient.callApi(
        '/submissions/{id}/similarity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSimilarityReportUrl operation.
     * @callback module:api/SimilarityApi~getSimilarityReportUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimilarityViewerUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to access Cloud Viewer
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:model/SimilarityViewerUrlSettings} data 
     * @param {module:api/SimilarityApi~getSimilarityReportUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimilarityViewerUrlResponse}
     */
    getSimilarityReportUrl(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data, callback) {
      let postBody = data;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling getSimilarityReportUrl");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling getSimilarityReportUrl");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSimilarityReportUrl");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling getSimilarityReportUrl");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SimilarityViewerUrlResponse;
      return this.apiClient.callApi(
        '/submissions/{id}/viewer-url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestSimilarityReport operation.
     * @callback module:api/SimilarityApi~requestSimilarityReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Similarity Report generation
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:model/SimilarityPutRequest} data 
     * @param {module:api/SimilarityApi~requestSimilarityReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessMessage}
     */
    requestSimilarityReport(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, data, callback) {
      let postBody = data;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling requestSimilarityReport");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling requestSimilarityReport");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling requestSimilarityReport");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling requestSimilarityReport");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SuccessMessage;
      return this.apiClient.callApi(
        '/submissions/{id}/similarity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestSimilarityReportPdf operation.
     * @callback module:api/SimilarityApi~requestSimilarityReportPdfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RequestPdfResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Pdf download and returns the Pdf Id
     * @param {String} xTurnitinIntegrationName a human readable string representing the type of integration being used
     * @param {String} xTurnitinIntegrationVersion the version of the integration platform being used
     * @param {String} id The Submission ID (returned upon a successful POST to /submissions) 
     * @param {module:api/SimilarityApi~requestSimilarityReportPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RequestPdfResponse}
     */
    requestSimilarityReportPdf(xTurnitinIntegrationName, xTurnitinIntegrationVersion, id, callback) {
      let postBody = null;
      // verify the required parameter 'xTurnitinIntegrationName' is set
      if (xTurnitinIntegrationName === undefined || xTurnitinIntegrationName === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationName' when calling requestSimilarityReportPdf");
      }
      // verify the required parameter 'xTurnitinIntegrationVersion' is set
      if (xTurnitinIntegrationVersion === undefined || xTurnitinIntegrationVersion === null) {
        throw new Error("Missing the required parameter 'xTurnitinIntegrationVersion' when calling requestSimilarityReportPdf");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling requestSimilarityReportPdf");
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
      let returnType = RequestPdfResponse;
      return this.apiClient.callApi(
        '/submissions/{id}/similarity/pdf', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
