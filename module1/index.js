// Модуль 1. Основы Node.js

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

const Calc = require("calc-js").Calc;
console.log(process.argv);
const [, , a, b] = process.argv;
console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
