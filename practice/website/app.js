var express=require('express');
var port=process.env.PORT || 3000;
// process是个全局变量，用来获取环境中的变量
var app=express();

app.set('views','./views');
// 设置视图的根目录
app.set('view engine','pug');
// 设置默认的末班引擎
app.listen(port);
// 监听端口

console.log('website started on port'+port);