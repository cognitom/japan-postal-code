var postal_code = require('../index');
var expect = require('expect.js');

describe('#get', function () {
  it('fetch address', function(done) {
    postal_code('1000001', function(address) {
      expect(address.prefecture).to.eql('東京都');
      expect(address.city).to.eql('千代田区');
      expect(address.area).to.eql('千代田');
      expect(address.street).to.eql('');
      delete global.$yubin;
      done();
    });
  });

  it('fetch address(hypen)', function(done) {
    postal_code('100-0001', function(address) {
      expect(address.prefecture).to.eql('東京都');
      expect(address.city).to.eql('千代田区');
      expect(address.area).to.eql('千代田');
      expect(address.street).to.eql('');
      delete global.$yubin;
      done();
    });
  });

  it('fetch null', function() {
    // FIXME: I want to test, callback function is not invoke
    postal_code('100', function(address) { });
  });
});
