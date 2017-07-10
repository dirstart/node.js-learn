let http=require('http');

let server=http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/html');
	res.writeHead(200);
	// 该状态码只会被调用一次
	res.end('<p>Hello</p>');
});
server.listen(3000);