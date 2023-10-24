// SSR Streaming Example with hydration.
import path from "node:path";

import express from "express";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticRouter,
  createStaticHandler,
} from "react-router-dom/server";
import { createFetchRequest } from "../utils/request";

import { __dirname } from "../utils/expose.cjs";
import { routes } from "./routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname + "./../../build/public");

app.use("/js", express.static(publicPath + "/js"));

let { query, dataRoutes } = createStaticHandler(routes);

app.get("*", async (req, res) => {
  res.socket.on("error", (error) => console.log("Fatal Socket Error:", error));
  let fetchRequest = createFetchRequest(req);
  let context = await query(fetchRequest);

  // If we got a redirect response, short circuit and let our Express server
  // handle that directly
  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  const reactNode = <StaticRouterProvider router={router} context={context} />;

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
