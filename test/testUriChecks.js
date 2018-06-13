/* eslint-env mocha */

const { expect } = require('chai');
const uriChecks = require('../lib/uriChecks');

describe('URI_CHECKS', () => {
  it('URI_CHECKS_API_NAME - /api/something should pass', done =>
    uriChecks().TestForApiName('/api/something')
      .then((resolved) => {
        expect(resolved).to.equal('/api/something');
        done();
      }));
});
