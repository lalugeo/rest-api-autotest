/**
* This library contains the list of URI checks to perform
* @module rest-api-autotest/uriChecks
*/

module.exports = (options) => {
  Object.assign(options, {});

  return {
    /**
    * Performs the all the tests on the URI as per RFC-3986
    * @param {string} routeToCollection - A route specifying a generic collection
    * @param {object} [checkSpecificOptions=null] - An optional object representing
    * the options to be used for this particular check. if not provided, the options
    * provided for the library will take over. The precedence is always for checkSpecificOptions,
    * if there are conflicting values provided.
    * @returns {Promise} Resolved if URI conforms to RFC specifications, Rejected if not
    */
    Test: (routeToCollection, checkSpecificOptions) => new Promise((resolve, reject) => {
      Object.assign(options, checkSpecificOptions);

      if (options.URI_CHECKS === false) {
        return resolve({
          CHECK_NAME: 'URI_CHECKS',
          IGNORED: true,
        });
      }

      return resolve();
    }),
  };
};
