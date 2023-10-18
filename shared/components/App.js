import { useState, useEffect } from "react";

const App = ({ isClient }) => {
  const [isClient, setIsClient] = useState(isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>My app</title>
      </head>
      <body>
        <h1>{isClient ? "Is Client" : "Is Server"}</h1>
      </body>
    </html>
  );
};

export { App };
