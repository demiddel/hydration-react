import { Suspense, lazy } from "react";

import Home from "./components/Home";

const About = lazy(() => import("./components/About"));

export const routes = [
  {
    element: Suspense,
    ErrorBoundaryRoute: <div>Error...</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
];
