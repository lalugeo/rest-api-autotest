/**
* The main library exposes the testing functions avialalbe to make sure
* the API conforms to RESTful specifications
* @module rest-api-autotest
* @requires rest-api-autotest/uriChecks
*/

const uriChecks = require('./lib/uriChecks');

module.exports = (options) => {
  Object.assign(options, {});

  return {

    /**
    * Performs the entire api tests as per the RFC specifications
    * @param {string} routeToCollection - A route specifying a generic collection
    * @param {string} [url=null] - An optional value specifying the base url
    * @param {object} [checkSpecificOptions=null] - An optional object representing
    * the options to be used for this particular check. if not provided, the options
    * provided for the library will take over. The precedence is always for checkSpecificOptions,
    * if there are conflicting values provided.
    * @returns {Promise} Resolved if API conforms to RFC specifications, Rejected if not
    */
    TestApi: (routeToCollection, url, checkSpecificOptions) => new Promise((resolve, reject) => {
      const listOfChecksToPerform = [];
      let urlProvided = false;

      if (!routeToCollection) return reject(new Error('Route to Collection is not provided!'));
      if (url) urlProvided = true;

      Object.assign(options, checkSpecificOptions);
      listOfChecksToPerform.push(uriChecks(options).Test(routeToCollection));

      return Promise.all(listOfChecksToPerform);
    }),
  };
};
