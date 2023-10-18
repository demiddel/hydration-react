// Beware, this is only useable when you already have a React Component from the Server to hydrate.
// Although you import a component, it is mandatory that this component is the same as being served from the server.
// A common approach is to save these components in a shared folder, so that both the server and client can import them.

import { App } from "../shared/components/App";

// I pass no element, but the document global itself, so I don't need an `index.html` and hydrate the entire document.
const root = ReactDOM.hydrateRoot(document, reactNode);

root.render(<App isClient={true} />);
