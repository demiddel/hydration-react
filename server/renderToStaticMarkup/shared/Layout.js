import React from "react";

function Layout({ title, description, ...props }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {props.head}
      </head>
      <body>{props.children}</body>
    </html>
  );
}

export default Layout;
