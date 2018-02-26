var http=require('http');
var url=require('url');

http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	var url_str=url.parse(req.url,true);
	res.end('hello,world\n'+url_str.stringify);
}).listen(3000);
console.log("web is use");