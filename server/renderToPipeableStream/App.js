import React, { lazy, Suspense } from "react";

import Home from "./components/Home.js";

const About = lazy(() => import("./components/About.js"));

const Spinner = () => <div>Loading...</div>;

const Main = () => {
  return (
    <>
      <Home />
      <Suspense fallback={<Spinner />}>
        <About />
      </Suspense>
    </>
  );
};

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
          <Main />
        </div>
      </body>
    </html>
  );
};

export default App;
