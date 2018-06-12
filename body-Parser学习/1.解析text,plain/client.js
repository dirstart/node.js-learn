const http = require('http');

// 请求方式定义
const options = {
	hostname: '127.0.0.1',
	port: '3000',
	path: '/test',
	method: 'POST',
	headers: {
		'Content-Type': 'text/plain',
		'Content-Encoding': 'identify'
	}
}

// 请求体函数定义
const client = http.request(options, res => {
	res.on('data', (chunk) => {
		console.log(`相应主体：${chunk}`);
	});
	res.on('end', () => {
		console.log('数据传输完毕！');
	});
});

client.on('error', (e) => {
	console.log(`请求遇到问题：${e.message}`);
});

client.end('client！');