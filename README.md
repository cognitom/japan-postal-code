# Japan Postal code
JavaScript module for Japan Postal Code.

Forked from https://github.com/ajaxzip3/ajaxzip3.github.io

## How to install
```
npm install japan-postal-code
```

## How to use

```js
var postal_code = require('japan-postal-code');

postal_code.get('1000001', function(address) {
  console.log(address.prefecture); // => "東京都"
  console.log(address.city); // => "千代田区"
  console.log(address.area); // => "千代田"
  console.log(address.street); // => ""
});
```

## LICENSE
MIT License

Copyright (c) 2015 MIZUNO Hiroki
http://github.com/mzp/japan-postal-code

Copyright (c) 2008-2015 Ninkigumi Co.,Ltd.
http://ajaxzip3.github.io/

Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html
