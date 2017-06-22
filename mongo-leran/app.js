var mongoose=require('mongoose');
var db=mongoose.createConnection('localhost','test');
// 创建一个数据库

console.log("a");

db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
	console.log("登录成功");
});