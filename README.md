# xhrhelpers

[![Build Status](https://travis-ci.org/yola/xhrhelpers.png)](https://travis-ci.org/yola/xhrhelpers)

xhrhelpers contains function to help interacting with XHR objects through
[promises](http://promisesaplus.com/).

# Usage
+ Use the XHR status

```javascript
promisifiedXHR
    .then(xhrHelpers.status)
    .then(console.log); // Logs the status of the xhr
```


+ Use the XHR response object

```javascript
promisifiedXHR
    .then(xhrHelpers.responseObject)
    .then(console.log); // Logs the response object of the xhr
```

+ Use the XHR response text

```javascript
promisifiedXHR
    .then(xhrHelpers.responseText)
    .then(console.log); // Logs the response text of the xhr
```

+ Check if the status code was successful (under 299)

```javascript
promisifiedXHR
    .then(xhrHelpers.twoHundredsOrThrow)
    .then(console.log); // Throws an error if the status code was > 299
```


# Install it
`$ npm install xhrhelpers`

# Test it
`$ npm test`
