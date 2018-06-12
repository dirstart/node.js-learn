const http = require('http');

const parseMethod = (req, handle) => {
    let length = req.headers['content-length'] - 0;
    let arr = [];
    let chunks;

    req.on('data', buff => {
        console.log(buff);
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        console.log('开始处理传进来的东西', chunks);
        handle(chunks);
    })
}

const server = http.createServer((req, res) => {
    parseMethod(req, (chunks) => {
        const json = chunks.toString();
        console.log('服务器收到了client发来的', json);
        res.end(json);
    });
});

server.listen(3000);