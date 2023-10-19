// NO HYDRATION !!
// There are no imports here, because I am using the CDN version of React & ReactDOM.
// NO JSX, so I don't need Babel etc. and to serve/host I use http-server.

// The most basic way to create a component, using CSR (Client Side Rendering)
const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo leo, euismod eu blandit non, rutrum sit amet nisi. In semper, magna ac sodales mollis, mauris nulla accumsan nulla, eget convallis nulla augue nec neque. Proin tristique erat diam, eget laoreet ligula hendrerit eget. Nulla faucibus, enim eu hendrerit pellentesque, turpis urna aliquam tellus, sit amet maximus felis nisi sit amet quam. Morbi a blandit lectus, sed pretium dui. Nunc quis nisl ac mi porta dapibus. Nullam mollis diam at justo tempor convallis. Praesent pharetra interdum augue, ac porta orci efficitur sit amet. Integer quis velit facilisis, semper est non, viverra ligula. Cras auctor vitae nunc sagittis rutrum. Mauris congue tortor id pulvinar venenatis. Quisque congue, lorem at luctus faucibus, ligula nisl iaculis ligula, in rhoncus nibh lectus scelerisque nisl. Sed vulputate nisi at risus iaculis accumsan. Duis pellentesque in eros a iaculis.";

const Paragraph = React.createElement("p", {}, placeholderText);
const Title = React.createElement("h1", {}, "Home");
const App = React.createElement("div", {}, Title, Paragraph);

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

// If you want multiple pages and support Routing, then here is where you would wrap everything in a RouterProvider before you render.
root.render(App);
