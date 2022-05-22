[BODY-PARSER](https://www.npmjs.com/package/body-parser)

## **Install:**

```console
$ npm install body-parser
```

<br/>

## **API:**

```js
var bodyParser = require("body-parser");
```

<br/>

## **Express:**

```js
bodyParser.urlencoded([options]);
```

Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.

A new body object containing the parsed data becomes request object after middleware (i.e. req.body).

### Options

- extended

  | URL-encoded data                                      |     |                |
  | ----------------------------------------------------- | --- | -------------- |
  | querystring library                                   |     | false          |
  | [qs library](https://www.npmjs.org/package/qs#readme) |     | true (Default) |

  - Allows for rich objects/arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

<br/>

- inflate

- limit

- parameterLimit

- type

- verify

```js
app.use(bodyParser.urlencoded({ extended: false }));
```
