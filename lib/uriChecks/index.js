/**
* This library contains the list of URI checks to perform
* @module rest-api-autotest/uriChecks
* @requires rest-api-autotest/checkError
* @requires rest-api-autotest/checkUtils
*/

const CheckError = require('../checkerr.js');
const checkUtils = require('../checkutils.js');

module.exports = (options) => {
  Object.assign(options, {});

  const checkList = {
    /**
    * Performs the all the tests on the URI as per RFC-3986. Check name = URI_CHECKS
    * This check can be deactivated by setting URI_CHECKS_API_NAME = false.
    * @param {string} routeToCollection - A route specifying a generic collection
    * @returns {Promise} Resolved if URI conforms to RFC specifications, Rejected if not
    */
    Test: routeToCollection => new Promise((resolve, reject) => {
      const THIS_CHECK_NAME = 'URI_CHECKS';

      Object.assign(options, {});

      if (options.URI_CHECKS === false) {
        return reject(new CheckError(THIS_CHECK_NAME, true));
      }

      return resolve(routeToCollection);
    })
      .then(checkList.TestForApiName)
      .catch(checkUtils.handleRejectedCheck),


    /**
    * Performs the test for whether the api uri starts with /api. Check name = URI_CHECKS_API_NAME.
    * This check can be deactivated by setting URI_CHECKS_API_NAME = false.
    * @param {string} routeToCollection - A route specifying a generic collection
    * @returns {Promise} Resolved if URI conforms to RFC specifications, Rejected if not
    */
    TestForApiName: routeToCollection => new Promise((resolve, reject) => {
      const THIS_CHECK_NAME = 'URI_CHECKS_API_NAME';

      if (options.URI_CHECKS_API_NAME === false) {
        return reject(new CheckError(THIS_CHECK_NAME, true));
      }

      if (!routeToCollection.test(/^\/api\/.+/)) {
        return reject(new CheckError(THIS_CHECK_NAME));
      }

      return resolve(routeToCollection);
    })
      .catch(checkUtils.handleRejectedCheck),

  };

  return checkList;
};
