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

<h4>About Package formats</h4>

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

<br>

<h4>npm package git URL formats</h4>

<div>
  
  <span>Git URLs used for npm packages can be formatted in the following ways:</span>
  * git://github.com/user/project.git#commit-ish
  * git+ssh://user@hostname:project.git#commit-ish
  * git+http://user@hostname/project/blah.git#commit-ish
  * git+https://user@hostname/project/blah.git#commit-ish

</div>

<br><br>

<h3>About modules</h3>
<p>A <b>module</b> is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.</p>

To be loaded by the Node.js require() function, a module must be one of the following:

    * A folder with a package.json file containing a "main" field.
    * A JavaScript file.

**Note:** Since modules are not required to have a `package.json` file, not all modules are packages. Only modules that have a `package.json` file are also packages.

In the context of a Node program, the module is also the thing that was loaded from a file. For example, in the following program:

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
