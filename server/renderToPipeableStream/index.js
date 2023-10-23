// Basic SSR Example with hydration.
require("@babel/register"); // to compile React

const path = require("path");
const fs = require("fs");

const express = require("express");
const React = require("react");
const { renderToPipeableStream } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");

const App = require("./App.js");

const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname + "./../../build/public");

app.use("/js", express.static(publicPath + "/js"));
const reactNode = React.createElement(App.default);

app.get("*", async (req, res) => {
  res.socket.on("error", (error) => console.log("Fatal Socket Error:", error));

  // const reactNode = React.createElement(
  //   StaticRouter,
  //   { location: req.url },
  //   App
  // );

  let hasError = false;
  // Render the application into a stream using `renderToPipeadableStream` and pipe that into the response
  const { pipe, abort } = renderToPipeableStream(reactNode, {
    bootstrapScripts: ["/js/index.js"],
    identifierPrefix: "root",
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
    onError(error) {
      hasError = true;
      console.log("Pipeable Error:", error);
      abort();
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
