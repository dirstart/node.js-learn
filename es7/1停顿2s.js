const sleep = (time) => {
    const timing = time || 1000;
    return new Promise((resolve, reject) => {
        console.log('计时开始');
        setTimeout(() => {
            resolve();
        }, timing);
    });
};

const init = async () => {
    await sleep(2000);
    console.log('2s之后的输出');
};

init();