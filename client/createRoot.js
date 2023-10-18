// NO HYDRATION !!
// There are no imports here, because I am using the CDN version of React & ReactDOM.
// Also no use of JSX, so I don't need Babel etc. and to serve/host I use http-server.

// The most basic way to create a component, using CSR (Client Side Rendering)

const App = () =>
  React.createElement("h1", {}, "Hello World: createRoot Example");

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(App());
