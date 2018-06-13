const fs = require('fs');
const path = 'D:/node.js-learn/fs/img2';

const handle = (arr, type) => {
    let promise = new Promise((resolve, reject) => {
        console.log('开始了');
        if (type === '.jpg') {
            for (let i = 0; i < 999999999; i++) {
            }
        }
        arr.forEach((item, index) => {
            const oldPath = path + '/' + item;
            const newPath = path + '/' + index + type;
            fs.rename(oldPath, newPath, err => console.log(err || `${type}操作成功`));
        });
    });
    return promise;
}

fs.readdir(path, (err, files) => {
    let txtArray = files.filter(file => /.txt$/.test(file));
    let jpgArray = files.filter(file => /.jpg$/.test(file));
    // handle(txtArray, '.txt');
    // handle(jpgArray, '.jpg');
    // 上面的这个其实还是同步操作。
    let p1 = () => handle(txtArray, '.txt');
    let p2 = () => handle(jpgArray, '.jpg');
    // Promise.all([p1(), p2()]);
    // 如果这是同步则：  开始了 -> 操作成功 -> 卡循环 -> 开始了 -> 操作成功
    // 如果这是异步则：  开始了 -> 开始了 -> 卡循环 -> 操作成功
    
    // 换个位置再来一次
    Promise.all([p2(), p1()]);
    // 证明了Node.js 依旧是单线程的。虽然说我们可以通过Promise将进程分开，
    // 但实际上在运行的时候依旧是单线程的。
});