const http = require('http');

const parseBody = (req, done) => {
	let arr = [],
		chunks;
	
	req.on('data', buff => {
		console.log('buff：', buff);
		arr.push(buff);
	});

	req.on('end', () => {
		chunks = Buffer.concat(arr);
		done(chunks);
	})
};

http.createServer((req, res) => {
	parseBody(req, (chunks) => {
		let body = chunks.toString();
		console.log('客户端信息成功接收，解析buffer如下：', body);
	});

	// 给客户端一点回应，防止 socket hang up.
	res.end('Hello World');
}).listen(3000);