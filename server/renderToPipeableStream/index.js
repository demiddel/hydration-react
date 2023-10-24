/**
 * Support es module
 * https://www.npmjs.com/package/esm
 * Should be loaded before loaders/monitors like
 *   @babel/register,
 *   newrelic,
 *   sqreen,
 *   and ts-node.
 */
// require = require("esm")(module /*, options*/);
/**
 * Support jsx
 */
require("@babel/register")({
  presets: ["@babel/preset-react"],
});
/**
 * Start the server
 */
module.exports = require("./server.js");
