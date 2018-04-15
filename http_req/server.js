<<<<<<< HEAD
const http = require('http');
http.createServer((req, res) => {
  const dd = new Date("2018-11-20");
  const ff = new Date("2018/11/20");
  res.end("haha");
}).listen(8080);
=======
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200);
	res.end("Hello world");
}).listen(3000);
>>>>>>> 858dad41a12091f09cbd3bda85289dc2cfd5db17
