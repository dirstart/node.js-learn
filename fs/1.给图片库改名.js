const fs = require('fs');
const filePath = 'D:/node.js-learn/fs/img';

fs.readdir(filePath, (err, files) => {
    if (err) {
        console.log(err.message);
        return;
    }

    files.forEach((file, index) => {
        const oldPath = `${filePath}/${file}`;
        const newPath = `${filePath}/${index}.jpg`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }

            console.log(`${file}修改成功`);
        });
    });
});