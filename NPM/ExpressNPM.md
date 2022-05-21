[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

<div>
    <p style=text-align:right;><a href = http://expressjs.com/ >Site</a></p>
</div>

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Make sure to create a `package.json` first with
the

```console
$ npm init
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Features

- Robust routing
- Focus on high performance
- Super-high test coverage
- HTTP helpers (redirection, caching, etc)
- View system supporting 14+ template engines
- Content negotiation
- Executable for generating applications quickly

## Quick Start

The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

Install the executable. The executable's major version will match Express's:

```console
$ npm install -g express-generator@4
```

Create the app:

```console
$ express /tmp/foo && cd /tmp/foo
```

Install dependencies:

```console
$ npm install
```

Start the server:

```console
$ npm start
```

View the website at: http://localhost:3000

## Examples

To view the examples, clone the Express repo and install the dependencies:

```console
$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
```

Then run whichever example you want:

```console
$ node examples/content-negotiation
```

### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install
$ npm test
```

<br>
<br>

## Basic routing

---

Routing refers to application responds to a client request to endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc).

Route definition takes the following structure:

```js
app.METHOD(PATH, HANDLER);
```

Where:

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

### Methods

checkout
copy
delete
get
head
lock
merge
mkactivity
mkcol
move
m-search
notify
options
patch
post
purge
put
report
search
subscribe
trace
unlock
unsubscribe

<br/>

### Handler

#### Response methods

The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

| Method             |     | Description                                                                           |
| ------------------ | --- | ------------------------------------------------------------------------------------- |
| `res.download()`   |     | Prompt a file to be downloaded.                                                       |
| `res.end()`        |     | End the response process.                                                             |
| `res.json()`       |     | Send a JSON response.                                                                 |
| `res.jsonp() `     |     | Send a JSON response with JSONP support.                                              |
| `res.redirect() `  |     | Redirect a request.                                                                   |
| `res.render()`     |     | Render a view template.                                                               |
| `res.send() `      |     | Send a response of various types.                                                     |
| `res.sendFile()`   |     | Send a file as an octet stream.                                                       |
| `res.sendStatus()` |     | Set the response status code and send its string representation as the response body. |

Don't use `res.send()` and `res.render()` in same code block

<br>
<br>
<br><br>
<br>
<br>
<br>

## Docs & Community

- [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
- [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
- [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
- Visit the [Wiki](https://github.com/expressjs/express/wiki)
- [Google Group](https://groups.google.com/group/express-js) for discussion

- [Gitter](https://gitter.im/expressjs/express) for support and discussion☻♣
  [MIT](LICENSE)

[appveyor-image]: https://badgen.net/appveyor/ci/dougwilson/express/master?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://badgen.net/coveralls/c/github/expressjs/express/master
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[github-actions-ci-image]: https://badgen.net/github/checks/expressjs/express/master?label=linux
[github-actions-ci-url]: https://github.com/expressjs/express/actions/workflows/ci.yml
[npm-downloads-image]: https://badgen.net/npm/dm/express
[npm-downloads-url]: https://npmcharts.com/compare/express?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/express
[npm-install-size-url]: https://packagephobia.com/result?p=express
[npm-url]: https://npmjs.org/package/express
[npm-version-image]: https://badgen.net/npm/v/express
