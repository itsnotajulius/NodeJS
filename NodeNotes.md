<head>

  <h1> Notes for Node</h1>
  
</head>

<h2>Extra</H2>

- Run node in comLine:
  > node appName.js

<br>

<h3>About Packages and Modules:</h3>

---

<div>
  
  <p>npm registry contains packages, many of which are also Node modules, or contain Node modules.</p>

  </br>
  </div>
    <p>A <b>package</b> is a file or directory that is described by a <span style ="color:#DDA0DD">package.json</span> file. A package must contain a <span style ="color:#DDA0DD">package.json</span> file in order to be published to the npm registry.</p>
    <p>Packages can be unscoped or scoped to a user or organization, and scoped packages can be private or public.</p>
  <div>
</div>

- <a href = https://docs.npmjs.com/about-scopes>About Scopes</a>
- <a href = https://docs.npmjs.com/about-private-packages>About Private packages</a>
- <a href = >Packages scope, access level and visibilty</a>

<br>

<h3>About Package formats</h3>

---

<div>
  
  <span>A package is any of the following:</span>
</div>

<br><br><br><br><br><br>

<h3>Getting Packages From registry:</h3>

Searching for package:

Using the packages in Node

```js
var projectName = require("@scope/package-name");
```

Start Connection:

```js
var connection = mysql.createConnection(..Connection Options...);
```

</div>
