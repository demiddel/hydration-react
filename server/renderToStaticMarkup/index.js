// NO HYDRATION !!
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildStaticPage } from "./buildStatic";

import Root from "./Root";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const HomePage = (
  <Root>
    <Home />
  </Root>
);
const AboutPage = (
  <Root>
    <About />
  </Root>
);
const ContactPage = (
  <Root>
    <Contact />
  </Root>
);

buildStaticPage("index", renderToStaticMarkup(HomePage));
buildStaticPage("about", renderToStaticMarkup(AboutPage));
buildStaticPage("contact", renderToStaticMarkup(ContactPage));
