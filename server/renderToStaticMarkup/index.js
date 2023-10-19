// NO HYDRATION !!
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildStaticPage } from "./buildStatic";

import Root from "./Root";

import About from "./pages/About";
import Contact from "./pages/Contact";

const HomePage = (
  <Root>
    <h1>My Site</h1>
    <p>Welcome to my website.</p>
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
