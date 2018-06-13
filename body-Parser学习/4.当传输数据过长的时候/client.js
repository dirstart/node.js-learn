const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: '3000',
    method: 'POST',
    path: '/',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'identify'
    }
}
const client = http.request(options, res => {
    console.log('这里是服务器返回的内容');
});


client.write('123');
client.write('test');

// client.