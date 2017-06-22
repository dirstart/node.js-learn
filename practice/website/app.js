var express=require('express');
var bodyParser=require('body-parser');
var serveStatic=require('serve-static');
var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
var _=require('underscore');
var port=process.env.PORT || 3000;
// process是个全局变量，用来获取环境中的变量
var path=require('path');
var app=express();

var Movie=require('./models/movie');
mongoose.connect('mongodb://localhost:27017/imooc');

app.set('views','./views/pages');
// 设置视图的根目录
app.set('view engine','pug');
// 设置默认的模板引擎
// app.use(express.bodyParser());   过版本语法，现已不支持
app.use(bodyParser.urlencoded({ extended: true }));
//上面那个要加extended:true，否则会在post的时候出错
//将表单里的数据进行格式化
// app.use(express.static(path.join(__dirname,'bower_components')));  过去版语法，现已不支持
app.use(serveStatic('bower_components'));
// 设置静态目录，其实就是使view中引入的东西路径正确
app.listen(port);
// 监听端口

console.log('website started on port'+port);

app.get('/',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		res.render('index',{
			title:'电影首页',
			movies:movies
		});
	});
});
// 直接调用实例的get方法
app.get('/movie/:id',function(req,res){
	var id=req.params.id;
	console.log("这个/movie/:id的网页中的id是:"+id);// 424这个地方是可以打印出东西来的
	if(id){
		console.log("进入了if这个判断里面");
		Movie.findById(id,function(err,movie){
			res.render('detail',{
				movie:movie,
				title:'website 详情页'+ movie.title,
			});
		});
	}else{
		console.log("上面的id是存在的，但是这里可能出现了错误");
	}
});

//admin update movie
app.get('/admin/update/:id',function(req,res){
	var id=req.params.id;
	if(id){
		Movie.findById(id,function(req,movie){
			res.render('admin',{
				title:'website 后台更新页',
				movie:movie
			});
		});
	}else{
		console.log("你的电影并没有成功录入进去");
	}
});
//admin post movie
app.post('/admin/movie/new',function(req,res){
	// console.log("a");  经过判断是下方这个语句出了问题
	var id=req.body.movie._id;
	// console.log("id is:"+id);
	var movieObj=req.body.movie;
	// console.log("movieObj is:"+movieObj);
	var _movie;
	// console.log(id==='undefined');//false
	// console.log(id=='undefined'); //false
	// console.log(id==="underfined"); //false
	// console.log(id);                  //undefined
	// console.log(typeof id);
	if(typeof(id)!=='undefined'){
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err);
			}
			_movie=_.extend(movie,movieObj);
			_movie.save(function(err,movie){
				if(err){
					console.log(err);
				}
				res.redirect('/movie/'+movie._id);
			});
		});
	}else{
		_movie=new Movie({
			doctor:movieObj.doctor,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			poster:movieObj.poster,
			summary:movieObj.summary,
			flash:movieObj.flash
		});
		_movie.save(function(err,movie){
			if(err){
				console.log("我是错误，我在这里");
				console.log(err);
			}
			console.log("跳转之前电影的id是："+movie._id);
			res.redirect('/movie/'+movie._id);
			console.log("这里是跳转之后");
		});
	}
});
app.get('/admin/movie', function (req, res)  {
	res.render('admin', {
		title:'iMovie 后台管理',
		movie: {
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
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		res.render('list', {
			title: 'iMovie 后台-影片列表',
			movies: movies
		});
	});
	
});