const fs = require("fs");
require("@babel/register"); // to compile React

// location where static content is published
const distLocation = __dirname + "/dist";

// deletes dist for full rebuild
if (process.env.FULL && fs.existsSync(distLocation)) {
  fs.rmSync(distLocation, { recursive: true, force: true });
}

// for creating directories if needed
const createDirectory = function (path) {
  const directory = path.replace(/\/([\w-]*)\.([\w]*)$/, "");
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

// build function writes the static html to a file in the dist directory
exports.buildStaticPage = function (path, content, type = "html") {
  const filePath = `${distLocation}/${path}.${type}`;
  createDirectory(filePath);
  fs.writeFile(filePath, "<!DOCTYPE html>\n" + content, (error) => {
    if (error) {
      console.error(error);
      return false;
    }
    console.log("Build of " + path + ".html successful");
  });
};

// build the pages
require("./index.js");
