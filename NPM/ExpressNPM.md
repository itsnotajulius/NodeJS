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

|         |           |             |
| ------- | --------- | ----------- |
| get     | post      | delete      |
| put     | copy      | checkout    |
| head    | lock      | trace       |
| merge   | m-search  | mkactivity  |
| move    | mkcol     | notify      |
| options | purge     | patch       |
| search  | subscribe | unsubscribe |
| report  | unlock    | use         |
|         | `all`     |             |

> _Hint:_ Special routing method, `app.all()`, used to load middleware functions at a path for all HTTP request methods.

<br/>

### Handler

#### Response methods

> The response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If no methods are called from a route handler, the client request will be left hanging.

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

## App.

### app.set

### app.use

<br>
<br><br>
<br>
<br>
<br>
