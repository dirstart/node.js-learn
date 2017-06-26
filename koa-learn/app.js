var koa=require('koa');
var app= new koa();
app.use(function *(){
	this.body='<p>Hello World</p>';
});

app.listen(3000);