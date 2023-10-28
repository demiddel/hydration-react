import React, { Suspense, lazy } from "react";

import Home from "./components/Home";
import App from "./App";
import Spinner from "./components/shared/Spinner";

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
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];
