[BODY-PARSER](https://www.npmjs.com/package/body-parser)

Install:

```console
$ npm install body-parser
```

<br/>

API:

```js
var bodyParser = require("body-parser");
```

<br/>

Express:

```js
bodyParser.urlencoded([options]);
```

Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.

A new body object containing the parsed data becomes request object after middleware (i.e. req.body).

Options

- extended

| URL-encoded data    |     |       |
| ------------------- | --- | ----- |
| querystring library |     | false |
| [qs library]()      |     | true  |

he "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.

Defaults to true, but using the default has been deprecated. Please research into the difference between qs and querystring and choose the appropriate setting.

- inflate

When set to true, then deflated (compressed) bodies will be inflated; when false, deflated bodies are rejected. Defaults to true.

- limit

Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.

- parameterLimit

The parameterLimit option controls the maximum number of parameters that are allowed in the URL-encoded data. If a request contains more parameters than this value, a 413 will be returned to the client. Defaults to 1000.

- type

The type option is used to determine what media type the middleware will parse. This option can be a string, array of strings, or a function. If not a function, type option is passed directly to the type-is library and this can be an extension name (like urlencoded), a mime type (like application/x-www-form-urlencoded), or a mime type with a wildcard (like \*/x-www-form-urlencoded). If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to application/x-www-form-urlencoded.

- verify

The verify option, if supplied, is called as verify(req, res, buf, encoding), where buf is a Buffer of the raw request body and encoding is the encoding of the request. The parsing can be aborted by throwing an error.

```js
app.use(bodyParser.urlencoded({ extended: false }));
```
