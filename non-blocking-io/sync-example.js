const fs = require('fs');

const readFile = () => fs.readFileSync('file.json');

exports.handler = () => {
  console.log('Going to read sync file');
  const file = readFile();
  console.log('File was read');
};
