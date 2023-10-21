// Beware, this is only useable when you already have a React Component from the Server to hydrate.
// Although you import a component, it is mandatory that this component is the same as being served from the server.
// A common approach is to save these components in a shared folder, so that both the server and client can import them.

// Get App component from shared folder `./js/App.js`.
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./../../../shared/components/App";

// Delay the hydration to simulate a slow connection.
setTimeout(() => {
  hydrateRoot(document.getElementById("root"), <App />);
}, 3000);
