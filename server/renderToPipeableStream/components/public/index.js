import React from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "../../App";
import Spinner from "../../shared/Spinner";

import { routes } from "../../routes";

const router = createBrowserRouter(routes);

hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} fallbackElement={Spinner} />
);
