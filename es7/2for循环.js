const sleep = (time) => {
    const timing = time || 1000;
    return new Promise((resolve, reject) => {
        console.log('计时开始');
        setTimeout(() => {
            resolve();
        }, timing);
    });
};

const start = async () => {
    for (var i = 0; i < 10; i++) {
        console.log(`当前是${i}...`);
        await sleep(1000);
    }
};

// 利用执行时间避开的 闭包问题。

start();