var mongoose=require('mongoose');
//引入模式这个文件

var MovieSchema=require('../schemas/movie');
var Movie=mongoose.model('Movie',MovieSchema);

// console.log("test");
// 将模式导出
module.exports=Movie;