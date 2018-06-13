const fs = require('fs');
const path = 'D:/藏经阁/路人女主';

// 获取文件的后缀名
const getExtName = (str) => {
    const reg = /(\.\w+$)/g;
    if (reg.test(str)) {
        reg.lastIndex = 0;
        return reg.exec(str)[1];
    } else {
        console.log('获取后缀名失败');
    }
};

// 读取文件夹
fs.readdir(path, (err, files) => {
    if (err) {
        console.log('读取文件夹失败');
        return;
    }
    let fileObj = {};
    let promiseArray = [];

    files.forEach((file) => {
        const ext = getExtName(file);
        // 排除掉 ext 和 file 为 undefine 的情况。
        if (!ext) {
            return;
        }
        // 第一次添加则创建数组
        if (!fileObj[ext] && ext) {
            fileObj[ext] = [];
        }
        fileObj[ext].push(file);
    });

    Object.keys(fileObj).forEach((type) => {
        let p = new Promise((resolve, reject) => {
            fileObj[type].forEach((file, index) => {
                const oldPath = `${path}/${file}`;
                const newPath = `${path}/${index}${type}`;
                fs.rename(oldPath, newPath, err => console.log(err || `${newPath}更新成功!`));
            });
        });
        promiseArray.push(p);
    });

    Promise.all(promiseArray);
});