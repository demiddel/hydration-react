import React from "react";

import Home from "./components/Home.js";

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="#" />
        <title>HydrateRoot Document</title>
      </head>
      <body>
        <div id="root">
          {/* <Nav /> */}
          <Home />
        </div>
      </body>
    </html>
  );
};

export default App;
