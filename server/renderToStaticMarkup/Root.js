import React from "react";

import Layout from "./shared/Layout";
import Nav from "./shared/Nav";

const Root = ({ ...props }) => {
  return (
    <Layout>
      <Nav />
      {props.children}
    </Layout>
  );
};

export default Root;
