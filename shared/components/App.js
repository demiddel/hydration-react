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
        {/* <!-- The link below removes the favicon.ico error --> */}
        <link rel="shortcut icon" href="#" />
        {/* <!-- Add CDN for React & ReactDOM --> */}
        <script
          crossorigin
          src="https://unpkg.com/react@18/umd/react.production.min.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
        ></script>
      </head>
      <body>
        <h1>{isClient ? "Is Client" : "Is Server"}</h1>
      </body>
    </html>
  );
};

export { App };
