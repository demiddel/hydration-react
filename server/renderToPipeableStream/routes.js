import React, { Suspense, lazy } from "react";

import Home from "./components/Home";
import Layout from "./components/shared/Layout";
import App from "./components/App";

const About = lazy(() => import("./components/About"));

export const routes = [
  {
    element: <App />,
    ErrorBoundaryRoute: <div>Error...</div>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];
