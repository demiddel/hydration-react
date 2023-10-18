import React from "react";
import Layout from "./shared/Layout";

function App(props) {
  return (
    <Layout {...props}>
      <h1>My Site</h1>
      <p>Welcome to my website.</p>
    </Layout>
  );
}

export default App;
