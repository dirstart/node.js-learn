const http = require('http');
const qs = require('querystring');


const parseMethod = (req, handle) => {
    let length = req.headers['content-length'] - 0;
    let arr = [];
    let chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        handle(chunks);
    })
}

const server = http.createServer((req, res) => {
    parseMethod(req, (chunks) => {
        const resData = qs.parse(chunks.toString());
        // console.log(resData, resData.name);
        // 不能以一个对象的形式发过去

        console.log(qs.parse(chunks.toString()));
        // res.end(`Your nick is ${resData.name}`)
    });
});

server.listen(3000);