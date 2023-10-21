import React, { useState, useEffect } from "react";

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? "Is Client" : "Is Server"}</h1>;
};

export { App };
