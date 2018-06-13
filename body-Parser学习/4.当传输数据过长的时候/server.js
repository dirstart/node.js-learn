const http = require('http');

const server = http.createServer((req, res) => {
    let arr = [],
        chunks;
    
    req.on('data', buff => {
        arr.push(buff);
        console.log('数据分片了一次');
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        let body = chunks.toString();
        console.log(body);
    });

    res.end('我收到了，客户端');
});

server.listen(3000);