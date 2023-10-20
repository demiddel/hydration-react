// Basic SSR Example with hydration.
// Using esbuild to bundle the client and server code.
const path = require("path");
const fs = require("fs");

const express = require("express");
const { renderToString } = require("react-dom/server");

const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.resolve(__dirname + "/public");

const App = require(publicPath + "/js/components/App");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  const html = renderToString(App({ initialState: false }));

  fs.readFile(`${publicPath}/index.html`, "utf8", (err, data) => {
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
