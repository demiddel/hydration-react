// Support JSX
require("@babel/register")({
  presets: ["@babel/preset-react"],
});

// Start the server
module.exports = require("./server.js");
