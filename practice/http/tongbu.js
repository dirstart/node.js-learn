var c=0;
function Print(){
	console.log(c);
}
function Plus(){
	setTimeout(function(){
		c+=1;
	},1000);
}
Plus();
Print();//这里最后会输出  0

var c=0;
function Print(){
	console.log(c);
}
function Plus(callback){
	setTimeout(function(){
		c+=1;
		callback();
	},1000);
}
Plus(Print);