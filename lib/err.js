
/**
* A custom error class that extends the nodejs Error class
* @extends Error
*/
const CheckError = class extends Error {
  /**
  * constructor for creating a new CheckError
  * @param {string} checkName - the name of the check that failed
  * @param {boolean} ignored - a boolean representing whether the
  * failure of the check was due to explicit ignore of the check
  * @returns {CheckError} An object representing this custom error class
  */
  contructor(checkName, ignored = false) {
    super(`${checkName} filed!`);
    this.checkName = checkName;
    this.ignored = ignored;
  }
};
