var jsonp = require('jsonp');
var prefmap = require('./prefmap.json');

var JSONDATA = 'https://yubinbango.github.io/yubinbango-data/data';

var cache = {};

module.exports = function(zip_code, callback) {
  if (!zip_code) return;

  // extract number only
  var nzip = zip_code.replace(/[^\d]/g, '');
  if (nzip.length < 7 ) return;

  // fetch from cache data using upper 3 digit
  var zip3 = nzip.substr(0, 3);
  var data = cache[zip3];
  if (data) return parse(nzip, data, callback);

  // fetch by jsonp
  fetchRemote(nzip, callback);
};

function parse(nzip, data, callback) {
  // Fix for Opera: 0xff000000 will be added to the index over 0x00800000
  var opera = (parseInt(nzip) + 0xff000000).toString();
  var array = data[nzip] || data[opera];
  console.log(array);
  if (!array || !array[0]) return callback(false);

  var jpref = prefmap[array[0] - 1];
  if (!jpref) throw 'Index out of bounds';

  callback({
    prefecture: jpref,
    city:       array[1] || '',
    area:       array[2] || '',
    street:     array[3] || ''
  });
}

function fetchRemote(nzip, callback) {
  var zip3 = nzip.substr(0, 3);
  var url = JSONDATA + '/' + zip3 + '.js';
  jsonp(url, { name: '$yubin' }, function (error, data){
    if (!error) {
      cache[zip3] = data;
      parse(nzip, data, callback);
    }
  });
}
