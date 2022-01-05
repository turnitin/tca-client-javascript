/**
 * Turnitin Core API
 * Turnitin Core API (TCA) provides direct API access to the core functionality provided by Turnitin. TCA supports file submission, similarity report generation, group management, and visualization of report matches via Cloud Viewer or PDF download. Below is the full flow to successfully set up an integration scope, an API Key, and make calls to TCA. Integration Scope and API Key management is done via the Admin Console UI by logging in as an admin user. For more details, go to our [developer portal documentation page](https://developers.turnitin.com/docs). ## Integration Scope and API Key Management TCA API calls must provide an API Key for authentication, so you must first have at least one integration scope associated with at least one API Key to use TCA. ### Admin Console UI First, login to Admin Console UI as an *Admin* user with permission to create Integration Scopes, under a tenant that is licensed to use the TCA product Integration Scopes (you can create a new one, or add keys to existing)    * Click `Integrations` in the side bar --> `+ Add Integration` at top the top of the page --> Enter a name --> `Add` Button   API Keys   * Click `Integrations` in the side bar --> `Create API Key` Button next to a given Integration Scope -->   Enter a name --> click `Create and View button`   * Copy/Save the key manually or click save to clipboard button to copy it (this is the only time it will show)  ## TCA Flow    *  Register a webhook   *  Create a submission   *  Upload a file for the submission   *  Wait for the submission upload to process      * If you registered a webhook, a callback will be sent to it when upload is complete      * The status of the *submission* will also update to `COMPLETE`   *  Request a Similarity Report   *  Wait for similarity report to process      * If you registered a webhook, a callback will be sent to it when report is complete      * The status of the *report* will also be updated to `COMPLETE`   *  Request a URL with parameters to view the Similarity Report 
 *
 * The version of the OpenAPI document: 1.0.238
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
    instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
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

  describe('FeaturesSimilarityViewSettings', function() {
    it('should create an instance of FeaturesSimilarityViewSettings', function() {
      // uncomment below and update the code to test FeaturesSimilarityViewSettings
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be.a(TurnitinCoreApi.FeaturesSimilarityViewSettings);
    });

    it('should have the property excludeQuotes (base name: "exclude_quotes")', function() {
      // uncomment below and update the code to test the property excludeQuotes
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeBibliography (base name: "exclude_bibliography")', function() {
      // uncomment below and update the code to test the property excludeBibliography
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeCitations (base name: "exclude_citations")', function() {
      // uncomment below and update the code to test the property excludeCitations
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeAbstract (base name: "exclude_abstract")', function() {
      // uncomment below and update the code to test the property excludeAbstract
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeMethods (base name: "exclude_methods")', function() {
      // uncomment below and update the code to test the property excludeMethods
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeSmallMatches (base name: "exclude_small_matches")', function() {
      // uncomment below and update the code to test the property excludeSmallMatches
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeInternet (base name: "exclude_internet")', function() {
      // uncomment below and update the code to test the property excludeInternet
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludePublications (base name: "exclude_publications")', function() {
      // uncomment below and update the code to test the property excludePublications
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeCrossref (base name: "exclude_crossref")', function() {
      // uncomment below and update the code to test the property excludeCrossref
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeCrossrefPostedContent (base name: "exclude_crossref_posted_content")', function() {
      // uncomment below and update the code to test the property excludeCrossrefPostedContent
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeSubmittedWorks (base name: "exclude_submitted_works")', function() {
      // uncomment below and update the code to test the property excludeSubmittedWorks
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludeCustomSections (base name: "exclude_custom_sections")', function() {
      // uncomment below and update the code to test the property excludeCustomSections
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

    it('should have the property excludePreprints (base name: "exclude_preprints")', function() {
      // uncomment below and update the code to test the property excludePreprints
      //var instance = new TurnitinCoreApi.FeaturesSimilarityViewSettings();
      //expect(instance).to.be();
    });

  });

}));
