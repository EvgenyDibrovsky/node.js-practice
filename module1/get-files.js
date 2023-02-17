// promises вытягиваем все
// const fs = require("fs").promises;
// promises вытягиваем только то, что нужно
const fs = require("fs/promises");
const path = require("path");
const dotenv = require("dotenv").config();

async function getfiles() {
  //   console.log("fs", fs);
  //   console.log("__dirname", __dirname);
  //   console.log("__filename", __filename);
  //   const data = await fs.readFile(path.join(__dirname, "./test.json"), "utf8");
  //   console.log(data);
  // --ПРОЧИТАТЬ--
  //   const data = await fs.readFile(
  //     path.join(__dirname, "./JSONtest.json"),
  //     "utf8"
  //   );
  //   console.log("data", data, typeof data);
  // --ДОПИСАТЬ--
  //   const next = JSON.parse(data);
  //   next.HELLO = "WORLD";
  //   await fs.writeFile(
  //     path.join(__dirname, "./JSONtest.json"),
  //     JSON.stringify(next),
  //     { encoding: "utf8" }
  //   );
  // --ПЕРЕИМЕНОВАТЬ--
  //   await fs.rename(
  //     path.join(__dirname, "./test.json"),
  //     path.join(__dirname, "./JSONtest.json")
  //   );
  // -- ПЕРЕЗАПИСЬ --
  //   await fs.writeFile(
  //     path.join(__dirname, "./JSONtest.json"),
  //     "это перезапишет содержимое json",
  //     {
  //       encoding: "utf8",
  //     }
  //   );
  // --ДОПИСАТЬ--
  //   await fs.appendFile(
  //     path.join(__dirname, "./JSONtest.json"),
  //     "это добавится в конец содержимого json это немного не то что нужно",
  //     {
  //       encoding: "utf8",
  //     }
  //   );
  // --УДАЛИТЬ--
  //   await fs.unlink
  //     path.join(__dirname, "./JSONtest.json"),
  //   );
}

getfiles();

// module.exports = getfiles;

// console.log("process", process.env);
console.log(process.env.PORT);
// process.nextTick(); - метод необходим для оптимизации. Метод срабатывает в промежутке методов в стеке
// console.log(process.argv); - возможность указывать аргументы
