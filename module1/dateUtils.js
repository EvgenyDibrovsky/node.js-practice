function getCurentData() {
  return (
    Date.now() +
    " " +
    "global доcтупен из любово файла" +
    "- global(из dateUtils.js) -" +
    global.testData
  );
}
console.log(__dirname);
console.log(__filename);
module.exports = {
  getCurentData,
};

