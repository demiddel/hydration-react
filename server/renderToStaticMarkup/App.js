import React from "react";
import {
  createStaticRouter,
  StaticRouterProvider,
  createStaticHandler,
} from "react-router-dom/server";

import Layout from "./shared/Layout";
import Nav from "./shared/Nav";

import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
  {
    Component: Layout,
    ErrorBoundary: () => <div>Error Page</div>,
    children: [
      { path: "/", Component: App },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
    ],
  },
];

const router = createStaticRouter(routes, { matches: [] });

function App() {
  return (
    <StaticRouterProvider router={router} context={{}}>
      <Nav />
      <h1>My Site</h1>
      <p>Welcome to my website.</p>
    </StaticRouterProvider>
  );
}

export default App;
