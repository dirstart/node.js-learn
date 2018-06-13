const http = require('http');
const qs = require('querystring');

const options = {
    hostname: '127.0.0.1',
    port: '3000',
    method: 'POST',
    path: '/',
    headers: {
        'Content-Type': 'form/x-www-form-urlencoded',
        'Content-Encoding': 'identify'
    }
};

const client = http.request(options, (res) => {
    let arr = [];
    res.on('data', buff => {
        arr.push(buff);
    });

    res.on('end', () => {
        console.log('已收到从服务端返回的数据', (Buffer.concat(arr)).toString());
    })
});

client.on('error', e => console.log(e.message));

const reqData = {
    name: 'xxx'
};


// console.log(JSON.stringify(reqData));
// {"attr": "value"}

// console.log(qs.stringify(reqData));
// attr=value

client.end(qs.stringify(reqData));