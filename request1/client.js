let http=require('http');
let qs=require('querystring');
var search_key={
	s:123
};
search_key=qs.stringify(search_key);
console.log(search_key);
var body_request={
	hostname:'dushu.xiaomi.com',
	path:'/store/v0/lib/query/onebox?'+search_key,
	port:80
};
http.get(body_request,(res)=>{
	var content='';
	res.setEncoding('utf-8');
	res.on('data',(chunk)=>{
		content+=chunk;
	});
	res.on('end',()=>{
		console.log(content);
	})
});