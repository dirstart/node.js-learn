var http=require('http');

http.request({
	host:'www.baidu.com',
	port:3000,
	url:'/',
	method:'GET'
},function(res){
	var body='';
	res.setEncoding('utf-8');
	res.on('data',function(chunk){
		body+=chunk;
	});
	res.on('end',function(){
		console.log('\n+ we got:'+body+'\n');
	})
}).end();