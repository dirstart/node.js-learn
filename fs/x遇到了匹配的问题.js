const str = '0.re 316340 kuroya_shinobu saenai_heroine_no_sodatekata topless.jpg';

// 怎么获取到最后一个 .jpg 呢？？？！！

// 修改如下，不要让 .* 匹配到多余的 .

const reg = /(\.\w+$)/g;
// 不使用 \S 的原因，在于，存在空格，所以不能用！！！！
console.log(reg.exec(str));