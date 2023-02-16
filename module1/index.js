// Модуль 1. Основы Node.js
// npm init -y инициализация проекта
// --Общее--
// const { getCurentData } = require("./dateUtils");
// global.testData = "global (из index.js)";
// global.testData = 1;

// console.log(`Get curent data function result - ${getCurentData()}`);
// console.log("Я программист! )))");
// console.log(global.testData);
// console.log(process.env);
// console.log(process.argv);
// console.log(process.exit);

// console.log(__dirname);
// console.log(__filename);

// --calc-js приложение--

// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// // const [, , a, b] = process.argv;
// // или
// const a = process.argv[2];
// const b = process.argv[3];

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// --Работа с путями --

// fs.readFile(filename, [options]) - чтение файла
// fs.writeFile(filename, data, [options]) - запись файла
// fs.appendFile(filename, data, [options])- добавление в файл
// fs.rename(oldPath, newPath) - переименование файла.
// fs.unlink(path, callback) - удаление файла.

// const path = require("path");

// console.log(path.resolve("dateUtils.js"));
// console.log(path.resolve("dateUtils.js"));

// const fs = require("fs");
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.error(data);
// });

// console.log(123456);

// -- CОЗДАНИЕ СЕРВЕРА --

const http = require("http");

const PORT = 8081;

const requestHandler = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Test</h1>");
};

const server = http.createServer(requestHandler);

server.listen(8081, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`OK ${PORT}!`);
});
