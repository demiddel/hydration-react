// Basic SSR Example with hydration.
// Using esbuild to bundle the client and server code.
const path = require("path");
const fs = require("fs");

const express = require("express");
// const { renderToString } = require("react-dom/server");

const { App } = require("../../shared/components/App.js");

const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname + "/public");
console.log("using public path", publicPath);

app.use("/js", express.static(publicPath + "/js"));

app.get("/", (req, res) => {
  // const html = renderToString(App());

  fs.readFile(`${publicPath}/index.html`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    return res.send(
      // data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      data.replace(
        '<div id="root"></div>',
        `<div id="root"><h1>Is Server</h1></div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
