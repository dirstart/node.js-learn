const http = require('http');
http.createServer((req, res) => {
  const dd = new Date("2018-11-20");
  const ff = new Date("2018/11/20");
  res.end("haha");
}).listen(8080);