var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var session=require('express-session');
var cookieParser = require('cookie-parser');
var mongoStore=require('connect-mongo')(session);
mongoose.Promise = require('bluebird');
// 还是外国的解答社区好用，操你妈逼
var _ = require('underscore');
var port = process.env.PORT || 3000;
// process是个全局变量，用来获取环境中的变量
var path = require('path');
var app = express();
app.locals.moment = require('moment');
var Movie = require('./models/movie');
var User = require('./models/user');
var dbUrl='mongodb://localhost:27017/imooc';
mongoose.connect(dbUrl);

app.set('views', './views/pages');
// 设置视图的根目录
app.set('view engine', 'pug');
// 设置默认的模板引擎
// app.use(express.bodyParser());   过版本语法，现已不支持
app.use(bodyParser.urlencoded({
	extended: true
}));
//上面那个要加extended:true，否则会在post的时候出错
//将表单里的数据进行格式化
// app.use(express.static(path.join(__dirname,'bower_components')));  过去版语法，现已不支持
app.use(serveStatic('bower_components'));
// 设置静态目录，其实就是使view中引入的东西路径正确
app.use(cookieParser());
app.use(session({
  secret: 'haha',
  store:new mongoStore({
  	url:dbUrl,
  	collection:'sessions'
  }),
  resave: false,
  saveUninitialized: true
}));
app.listen(port);
// 监听端口

console.log('website started on port' + port);


// 0.pre reading
app.use(function(req,res,next){
	var _user=req.session.user;
	console.log(_user);
	if(_user){
		app.locals.user=_user;
	}
	return next();
});


// 1.首页路由
app.get('/', function(req, res) {
	console.log('user in session:'+req.session.user);
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err);
		}
		res.render('index', {
			title: '视频首页',
			movies: movies
		});
	});
});
// 2.电影详情页的路由
app.get('/movie/:id', function(req, res) {
	var id = req.params.id;
	console.log("这个/movie/:id的网页中的id是:" + id); // 424这个地方是可以打印出东西来的
	if (id) {
		Movie.findById(id, function(err, movie) {
			if (err) {
				console.log("在这里出现了错误");
				return;
			}
			console.log(movie.title);
			console.log(movie);
			res.render('detail', {
				title: "oh" + movie.title,
				movie: movie
			});
			//这里的意思其实给detail这个html文件传值
			console.log("这里已经走完了一次if");
		});
	}
});

// 3.电影更新路由，admin update movie
app.get('/admin/update/:id', function(req, res) {
	var id = req.params.id;
	if (id) {
		Movie.findById(id, function(req, movie) {
			res.render('admin', {
				title: 'website 后台更新页',
				movie: movie
			});
		});
	} else {
		console.log("你的电影并没有成功录入进去");
	}
});

// test
app.get('/test',function(req,res){
	res.render('xx',{

	});
});
// 4.电影post地址路由
app.post('/admin/movie/new', function(req, res) {
	// console.log("a");  经过判断是下方这个语句出了问题
	var id = req.body.movie._id;
	console.log("在post这个过程中id是:" + id); //undefined
	var movieObj = req.body.movie;
	// console.log("movieObj is:"+movieObj);
	var _movie;
	// console.log(id==='undefined');//false
	// console.log(id=='undefined'); //false
	// console.log(id==="underfined"); //false
	// console.log(id);                  //undefined
	// console.log(typeof id);
	if (typeof(id) !== 'undefined') {
		Movie.findById(id, function(err, movie) {
			if (err) {
				console.log(err);
			}
			_movie = _.extend(movie, movieObj);
			_movie.save(function(err, movie) {
				if (err) {
					console.log(err);
				}
				res.redirect('/movie/' + movie._id);
			});
		});
	} else {
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		});
		_movie.save(function(err, movie) {
			if (err) {
				console.log("我是错误，我在这里");
				console.log(err);
			}
			console.log("跳转之前电影的id是：" + movie._id);
			res.redirect('/movie/' + movie._id);
			console.log("这里是跳转之后");
		});
	}
});
// 5.电影真正的更新地址
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'iMovie 后台管理',
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
// 6.电影列表页路由
app.get('/admin/list', function(req, res) {
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err);
		}
		res.render('list', {
			title: '视频后台页',
			movies: movies
		});
	});

});

// 7.电影注册页路由
app.post('/user/signup',function(req,res){
	var _user = req.body.user; //拿到表单提交的user数据
	User.findOne({name: _user.name}, function(err, user){//判断用户名是否被占用
		if(err){
			console.log(err);
		}
		if(user){
			return res.redirect('/');
		}
		else{
			user = new User(_user); //直接生成用户数据
			user.save(function(err, user){
				if(err){
					console.log(err);
				}
				res.redirect('/admin/userlist');
			});
		}
	});
});
// 8.用户列表路由
app.get('/admin/userlist',function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err);
		}
		res.render('userlist',{
			title:'用户列表页',
			users:users
		});
	});
});
// 9.用户登录路由
app.post('/user/signin',function(req,res){
	var _user=req.body.user;
	var name=_user.name;
	var password=_user.password;
	User.findOne({name:name,password:password},function(err,user){
		if(err){
			console.log(err);
		}
		if(!user){ //用户不存在或者密码错误
			console.log("用户不存在或者密码错误");
			return res.redirect('/');
		}else{

			req.session.user=user;
			console.log("登录成功");
			return res.redirect('/');
		}
	});
});
// 10.登出功能log out
app.get('/logout',function(req,res){
	delete req.session.user;
	delete app.locals.user;
	res.redirect('/');
});

// 11.删除的请求
app.delete('/admin/list', function (req, res) {
    var id = req.query.id;
    if (id) {
        Movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json({success: 1});
            }
        });
    }
});