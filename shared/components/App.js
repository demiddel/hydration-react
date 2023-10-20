import * as React from "react";

const App = ({ initialState = false }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? "Is Client" : "Is Server"}</h1>;
};

export { App };
