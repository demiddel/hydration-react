// NO HYDRATION !!
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildStaticPage } from "./buildStatic";

import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./App";

buildStaticPage("index", renderToStaticMarkup(<App />));
buildStaticPage("about", renderToStaticMarkup(<About />));
buildStaticPage("contact", renderToStaticMarkup(<Contact />));
