function* talk(name){
	// yield和return其实非常相似，二者的区别在于，普通函数只能returnyici
	// 而生成器函数可以yield多次，相当于能够实现函数的暂停
	yield "hello,"+name+"!";
	yield "this is yield area!";
	yield "this is a function but a generator";
	if(name.length<3){
		yield "your name is good";
	}else{
		yield "no";
	}
}
var generatorExample=talk('chenhongpeng');
for(var i=0;i<4;i++){
	console.log(generatorExample.next());
}
console.log(generatorExample.next());
var c=talk('chenhongpeng');
console.log(c.next());
var d=c;
console.log(d.next());