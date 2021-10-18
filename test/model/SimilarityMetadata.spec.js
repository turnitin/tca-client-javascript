/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.228
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TurnitinCoreApi);
  }
}(this, function(expect, TurnitinCoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TurnitinCoreApi.SimilarityMetadata();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SimilarityMetadata', function() {
    it('should create an instance of SimilarityMetadata', function() {
      // uncomment below and update the code to test SimilarityMetadata
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be.a(TurnitinCoreApi.SimilarityMetadata);
    });

    it('should have the property overallMatchPercentage (base name: "overall_match_percentage")', function() {
      // uncomment below and update the code to test the property overallMatchPercentage
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property internetMatchPercentage (base name: "internet_match_percentage")', function() {
      // uncomment below and update the code to test the property internetMatchPercentage
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property publicationMatchPercentage (base name: "publication_match_percentage")', function() {
      // uncomment below and update the code to test the property publicationMatchPercentage
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property submittedWorksMatchPercentage (base name: "submitted_works_match_percentage")', function() {
      // uncomment below and update the code to test the property submittedWorksMatchPercentage
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property submissionId (base name: "submission_id")', function() {
      // uncomment below and update the code to test the property submissionId
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property timeGenerated (base name: "time_generated")', function() {
      // uncomment below and update the code to test the property timeGenerated
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property timeRequested (base name: "time_requested")', function() {
      // uncomment below and update the code to test the property timeRequested
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property topMatches (base name: "top_matches")', function() {
      // uncomment below and update the code to test the property topMatches
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

    it('should have the property topSourceLargestMatchedWordCount (base name: "top_source_largest_matched_word_count")', function() {
      // uncomment below and update the code to test the property topSourceLargestMatchedWordCount
      //var instance = new TurnitinCoreApi.SimilarityMetadata();
      //expect(instance).to.be();
    });

  });

}));
