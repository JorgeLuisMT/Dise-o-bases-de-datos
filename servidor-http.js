const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("<h1>Hola bienvenido a mi página</h1>");
});

console.log(process.env.PORT);

server.listen(3000, () => console.log(`http://localhost:3000`));
