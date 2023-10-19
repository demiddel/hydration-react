const React = require("react");
// const { useState, useEffect } = require("react");

const App = ({ isClient = false }) => {
  //   const [isClient, setIsClient] = React.useState(initialState);

  //   React.useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  return <h1>{isClient ? "Is Client" : "Is Server"}</h1>;
};

module.exports = { App };
