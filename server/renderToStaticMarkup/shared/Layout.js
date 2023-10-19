import React from "react";

const Layout = ({ title, description, ...props }) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* The link element below removes the favicon.ico error */}
        <link rel="shortcut icon" href="#" />
        {props.head}
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
