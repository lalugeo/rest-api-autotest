/**
* This library contains the list of URI checks to perform
* @module rest-api-autotest/checkUtils
*/


module.exports = (options) => {
  Object.assign(options, {});

  return {

    /**
    * This function will make sure that a check that has been rejected
    * due to setting of ignore flag, or a check that has been rejected due
    * to failure of the check parameters will not cause the abrupt
    * stop of all other checks. An abrupt stop of all other checks needs
    * to be performed only when an unknown technical error was raised
    * by the library.
    * @param {object} err - the error object represening the rejection
    * @returns {Promise} - a promise resolved if CHECK FAIL and rejected if
    * an unhandled technical error was raised.
    */
    handleRejectedCheck: err => new Promise((resolve, reject) => {
      console.log('reached here');
      console.log(err.API_RAISED_ERROR);
      if (err.API_RAISED_ERROR) {
        return resolve(err);
      }

      return reject(err);
    }),
  };
};
