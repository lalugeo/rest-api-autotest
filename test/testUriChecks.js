/* eslint-env mocha */

const { expect } = require('chai');
const uriChecks = require('../lib/uriChecks');

describe('URI_CHECKS', () => {
  it.only('URI_CHECKS_API_NAME - /api/something should pass', done =>
    uriChecks().TestForApiName('/api/something')
      .then((resolved) => {
        console.log('blah blah');
        console.log(resolved);
        expect(resolved).to.equal('/api/something');
        done();
      }));

  it('URI_CHECKS_API_NAME - /api should fail', done =>
    uriChecks().TestForApiName('/api')
      .then((resolved) => {
        expect(resolved).to.include({
          checkName: 'URI_CHECKS_API_NAME',
          ignored: false,
          API_RAISED_ERROR: true,
          message: 'URI_CHECKS_API_NAME failed!',
        });
        done();
      }));

  it('URI_CHECKS_API_NAME - Ignore flag', done =>
    uriChecks({ URI_CHECKS_API_NAME: false }).TestForApiName('/api')
      .then((resolved) => {
        expect(resolved).to.include({
          checkName: 'URI_CHECKS_API_NAME',
          ignored: true,
          API_RAISED_ERROR: true,
          message: 'URI_CHECKS_API_NAME failed!',
        });
        done();
      }));
});
