/* eslint-env mocha */

const { expect } = require('chai');
const uriChecks = require('../lib/uriChecks');

describe('URI_CHECKS', () => {
  it('URI_CHECKS_API_NAME - /api/something should pass', () =>
    uriChecks().TestForApiName('/api/something')
      .then((resolved) => {
        expect(resolved).to.equal('/api/something');
      }));

  it('URI_CHECKS_API_NAME - /api should fail', () =>
    uriChecks().TestForApiName('/api')
      .then((resolved) => {
        expect(resolved).to.include({
          checkName: 'URI_CHECKS_API_NAME',
          ignored: false,
          API_RAISED_ERROR: true,
          message: 'URI_CHECKS_API_NAME failed!',
        });
      }));

  it('URI_CHECKS_API_NAME - Ignore flag', () =>
    uriChecks({ URI_CHECKS_API_NAME: false }).TestForApiName('/api')
      .then((resolved) => {
        expect(resolved).to.include({
          checkName: 'URI_CHECKS_API_NAME',
          ignored: true,
          API_RAISED_ERROR: true,
          message: 'URI_CHECKS_API_NAME failed!',
        });
      }));
});
