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

// npm init -y

// fs.readFile(filename, [options]) - чтение файла
// fs.writeFile(filename, data, [options]) - запись файла
// fs.appendFile(filename, data, [options])- добавление в файл
// fs.rename(oldPath, newPath) - переименование файла.
// fs.unlink(path, callback) - удаление файла.
