var xhrHelper = require('../index');
var chai = require('chai');

chai.should();

describe('xhr helper', function() {
  it('returns a status code', function() {
    var status = {
      xhr: {
        status: 404
      }
    };

    xhrHelper.status(status).should.equal(404)
  });

  it('returns a parsed response object', function() {
    var response = {
      xhr: {
        responseText: '{"key": "value"}'
      }
    };
    xhrHelper.responseObject(response).should.deep.equal({key: "value"});
  });

  it('returns response test', function() {
    var response = {
      xhr: {
        responseText: 'Happy Server'
      }
    };
    xhrHelper.responseText(response).should.equal('Happy Server');
  });
});
