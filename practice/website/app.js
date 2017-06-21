var express=require('express');
var bodyParser=require('body-parser');
var serveStatic=require('serve-static');
var mongoose=require('mongoose');
var port=process.env.PORT || 3000;
// process是个全局变量，用来获取环境中的变量
var path=require('path');
var app=express();

mongoose.connect('mongodb://localhost/imoo');

app.set('views','./views/pages');
// 设置视图的根目录
app.set('view engine','pug');
// 设置默认的模板引擎
// app.use(express.bodyParser());   过版本语法，现已不支持
app.use(bodyParser.urlencoded());
//将表单里的数据进行格式化
// app.use(express.static(path.join(__dirname,'bower_components')));  过去版语法，现已不支持
app.use(serveStatic('bower_components'));
// 设置静态目录，其实就是使view中引入的东西路径正确
app.listen(port);
// 监听端口

console.log('website started on port'+port);

app.get('/',function(req,res){
	res.render('index',{
		title:'Movie 首页',
		movies:[{
			title:'奇妙世纪 08 梦的还原器',
			_id: 1,	
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 2,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 3,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 4,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 5,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 6,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		}]
	});
});
// 直接调用实例的get方法
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'website 详情页',
		movie: {
			title: '奇妙世纪 08 梦的还原器',
			doctor: '程亮/林博',
			country: '大陆',
			year: 2014,
			language: '汉语',
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
			flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf',
			summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。'
		}
	});
});
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'电影 后台管理页',
		movie:{
			title: ' ',
			doctor: ' ',
			country: ' ',
			year: ' ',
			language: ' ',
			summary: ' ',
			poster: ' ',
			flash: ' '
		}
	});
});
app.get('/admin/list',function(req,res){
	res.render('list', {
		title:'iMovie 后台-影片列表',
		movies: [{
			_id: 1,
			title: '奇妙世纪 08 梦的还原器',
			doctor: '程亮/林博',
			country: '大陆',
			year: 2014,
			language: '汉语',
			summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。',
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
			flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf'
		}]
	});
});