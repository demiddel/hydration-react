import React from "react";
import Layout from "./shared/Layout";
import Nav from "./shared/Nav";

import About from "./pages/About";
import Contact from "./pages/Contact";
import { createHashRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", Component: App },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
    ],
  },
];

const router = createHashRouter(routes);

function App() {
  return (
    <RouterProvider router={router}>
      <Nav />
      <h1>My Site</h1>
      <p>Welcome to my website.</p>
    </RouterProvider>
  );
}

export default App;
