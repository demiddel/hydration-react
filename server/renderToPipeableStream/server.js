// SSR Streaming Example with hydration.
import path from "node:path";

import express from "express";
import React, { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App.js";
import { __dirname } from "./expose.cjs";

const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname + "./../../build/public");

app.use("/js", express.static(publicPath + "/js"));

app.get("*", async (req, res) => {
  res.socket.on("error", (error) => console.log("Fatal Socket Error:", error));

  const reactNode = createElement(StaticRouter, { location: req.url }, <App />);

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
