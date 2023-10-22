// Basic SSR Example with hydration.
// Using esbuild to bundle the client and server code.
const path = require("path");
const fs = require("fs");

const express = require("express");
require("@babel/register");
const React = require("react");
const { renderToString } = require("react-dom/server");

const { App } = require("../../shared/components/App.js");

const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname + "./../../build/public");
const htmlIndex = path.resolve(__dirname + "/public/index.html");

app.use("/js", express.static(publicPath + "/js"));
const reactNode = React.createElement(App);

app.get("/", (req, res) => {
  const html = renderToString(reactNode);

  fs.readFile(htmlIndex, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
