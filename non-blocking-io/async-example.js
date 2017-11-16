const fs = require('fs');

const readFile = (cb) => fs.readFile('file.json', cb);

exports.handler = () => {
  console.log('Going to read async file');
  readFile(file => {
    console.log('Async file was read successfully');
  });
  console.log('Async file wasn\' read yet');
};
