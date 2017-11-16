const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Tye', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => console.log(`Your http server is running at http://${hostname}:${port}`));