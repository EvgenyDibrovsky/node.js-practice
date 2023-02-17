const fs = require("fs");
const path = require("path");

function getfiles() {
  console.log("__dirname", __dirname);
  console.log("__filename", __filename);

  fs.readFile(path.join(__dirname, "./config.js"), "utf8", (err, data) => {
    console.log(data);
  });
}
getfiles();

// module.exports = getfiles;
