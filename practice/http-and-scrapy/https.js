var https=require('https');
var fs=require('fs');
// var http=require('http');

var options={
	key:fs.readFileSync('ssh_key.pem'),
	cert:fs.readFileSync('ssh_cert.pem')
};

https.createServer(function(req,res){
	res.writeHead(200);
	res.end('Hello World');
})
.listen(8008);
