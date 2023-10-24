import React from "react";
import Layout from "./components/shared/Layout";

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
          <Layout />
        </div>
      </body>
    </html>
  );
};

export default App;
