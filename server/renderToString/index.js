// Basic SSR Example with hydration.
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const express = require("express");
const { renderToString } = require("react-dom/server");

// To compile React JSX.
require("@babel/register");

const { App } = require("../../shared/components/App");

const app = express();
const staticPath = path.join(__dirname + "./../../client/hydrateRoot");
const componentPath = path.join(__dirname + "./../../shared/components");

app.use("/js/index.js", express.static(`${staticPath}/index.js`));
app.use("/js/App.js", express.static(`${componentPath}/App.js`));

app.get("/", (req, res) => {
  const html = renderToString(App({ initialState: false }));

  fs.readFile(`${staticPath}/index.html`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    // res.set("Content-Type", "text/html");
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
