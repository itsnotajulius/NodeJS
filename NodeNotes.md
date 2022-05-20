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
- <a href = https://docs.npmjs.com/package-scope-access-level-and-visibility>Packages scope, access level and visibilty</a>

<br>

<h3>About Package formats</h3>

---

<div>
  
  <span>A package is any of the following:</span>
  1. A folder containing a program described by a <span style ="color:#DDA0DD">package.json</span> file.
  2. A gzipped tarball containing (1).
  3. A URL that resolves to (2).
  4. A "name"@"version" that is published on the registry with (3).
  5. A "name"@"tag" that points to (4).
  6. A "name" that has a latest tag satisfying (5).
  7. A git url that, when cloned, results in (1).

</div>

<h3>About Package formats</h3>

---

<div>
  
  <span>A package is any of the following:</span>
  1. A folder containing a program described by a <span style ="color:#DDA0DD">package.json</span> file.
  2. A gzipped tarball containing (1).
  3. A URL that resolves to (2).
  4. A "name"@"version" that is published on the registry with (3).
  5. A "name"@"tag" that points to (4).
  6. A "name" that has a latest tag satisfying (5).
  7. A git url that, when cloned, results in (1).

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
