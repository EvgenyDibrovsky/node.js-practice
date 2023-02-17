// promises вытягиваем все
// const fs = require("fs").promises;
// promises вытягиваем только то, что нужно
const fs = require("fs/promises");
const path = require("path");

async function getfiles() {
  //   console.log("fs", fs);
  //   console.log("__dirname", __dirname);
  //   console.log("__filename", __filename);

  //   const data = await fs.readFile(path.join(__dirname, "./test.json"), "utf8");
  //   console.log(data);

  await fs.rename(
    path.join(__dirname, "./test.json"),
    path.join(__dirname, "./JSONtest.json")
  );
}
getfiles();

// module.exports = getfiles;
