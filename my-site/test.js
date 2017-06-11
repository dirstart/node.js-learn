var http=require("http");

var server=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>Node.js demo one</h1>");
	res.end("<p>Hello World2,node</p>");
});
server.listen(3000);

console.log("http server is listening at port 3000,Node.js");