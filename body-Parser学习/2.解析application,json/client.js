const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: '3000',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'identify'
    }
};

const reqJson = {
    name: 'test'
};

const client = http.request(options, (res) => {
    // todo
    res.on('data', chunks => console.log(chunks.toString()));

});

client.on('error', error => console.log(error.message));

const data = JSON.stringify(reqJson);

client.end(data);