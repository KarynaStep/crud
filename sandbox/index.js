const fs = require('fs');
const path = require('path')

const currentFileName = path.basename(__filename)

fs.readdirSync(__dirname).filter(
  (fileName) => /\.js$/.test(fileName) && fileName !== currentFileName)
  .forEach((fileName) => {
    const absPathTOFile = path.resolve(__dirname, fileName)
  const Test = require(absPathTOFile)
})