<head>

  <h1> Notes for Node</h1>
  
</head>

<h2>Extra</H2>

- Run node in comLine:
  > node appName.js
- Upgrade NPM
  > npm install npm@latest -g

<br>

<h2>Installing</h2>

---

1. Create a working directory to hold your application

   ```shell
   $ mkdir myapp

   $ cd myapp
   ```

   - Assuming you’ve already installed <mark>Node.js</mark>,

<br>

2. Use the `npm init` command to create a <mark>package.json</mark> file for your application.
   `shell $ npm init `
   <br>

3. Optional with the following: `entry point: (index.js)`
   Enter app.js, or whatever you want the name of the main file to be.

<br>

4. Now install (With/without dependencies list.)

   ```Shell
   $ npm install module

   $ npm install express --save
     `Goes to package.json dependencies`

   $ npm install express --save--dev
     `Goes to package.json devdependencies`

   $ npm install express --no-save
     `Just temp install`
   ```

- Tip: Can send and upload the package.json to others so they know what you have installed

<br>

<br><br>

<h3>Modules</h3>

---

<p>A <b><span style ="color: #4d4dff">module</span> </b> is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.</p>
All Modules have there own functions.

<br/>

For example:

```js
var req = require($module);
```

| Module List |            |      |
| ----------- | ---------- | ---- |
| Faker       | BodyParser | EJSN |
| **Express** | MySQL      |

<br><br>

<br>

<br><br><br><br><br>

</iv>

<h3>Resources</h3>
<div>

- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/MySQLNPM.md>MySQL NPM<a>
- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/ExpressNPM.md>Express NPM<a>
- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/BodyParserNPM.md>Body Parser NPM<a>
- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/MySQLNPM.md>MySQL NPM<a>
- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/ExpressNPM.md>Express NPM<a>
- <a href = https://github.com/itsnotajulius/NodeJS/blob/main/NPM/BodyParserNPM.md>Body Parser<a>
</div>
