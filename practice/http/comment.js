var http=require('http');
var querystring=require('querystring');

var postData=querystring.stringify({
	'content':'测试一次',
	'cid':348
});


var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=2b98ea3e-d302-42fc-a55f-b29ac7a101bf; imooc_isnew_ct=1497096096; mc_channel=banner; mc_marking=02b8e60903043e419983b80f9c2ecc5a; loginstate=1; apsid=gxZDQ5OWM1ZjdlYjVkMTQxYzVjZTVjYjhlM2ExNDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDk0NDE4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MzUwNDEwNThAcXEuY29tAAAAAAAAAAAAAAAAAAAAADdlNzYzNjVlYTI0ZGI5OGIzYWUwZDg3Y2QwNTIxODJiArdDWQK3Q1k%3DZj; last_login_username=835041058%40qq.com; wP_v=7f84006f10faJXu8s7EapGuGtdEnr_6_eirar_LB_IDA~XuGig5gQmmhYmDe1GiY; PHPSESSID=q4nkv8ador1gbmrsj61vbulh83; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1497508532,1497525767,1497609961,1497613843; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1497614208; imooc_isnew=2; cvde=5943c60c4077e-30',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
};

var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end',function(){
		console.log("评论完毕");
	});
});

req.on('error',function(e){
	console.log("Error"+e.message);
});
req.write(postData);
req.end();