# [EJS NOTES](https://ejs.co)

## Basic setup

|                |     |                    |
| -------------- | --- | ------------------ |
| Install (npm)  |     | `npm install ejs`  |
| Install (yarn) |     | `yarn install ejs` |

## Using EJS

| app.set     |     |                                  |
| ----------- | --- | -------------------------------- |
| view engine |     | `app.set("view engine", "ejs");` |

### Rendering:

- Express:
  ```js
  app.get("/", (req, res) => {
    res.render("index", { foo: "FOO" });
  });
  ```
  - {nameVar: var} is sent to ejs
  - `index.ejs` should be in views directory
