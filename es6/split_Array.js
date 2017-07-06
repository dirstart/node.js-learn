var my_array=[1,4,345,34,53,45,34,5,345,45,34];
console.log(typeof my_array[3]);
var tos_array=my_array.toString();
console.log(tos_array);
console.log(typeof tos_array[3]);

//拆分数组，方法一，过去的JS?
function splitArray(all,len){
	var last=[];
	for(var i=0;i<all.length;i=i+len){
		last.push(all.slice(i,i+len));
	}
	return last;
}

var c=splitArray(my_array,3);
console.log(c);

//拆分数组2，方法二，使用ES6的生成器
function* splitArray2(all,len){
	for(var i=0;i<all.length;i=i+len){
		yield all.slice(i,i+len);
	}
}
var row=[];
var d=splitArray2(my_array,3);

console.log("这里是使用了ES6生成器达成的方法，并且！！！使用es6的var of实现遍历:\n")
for(var data of d){
	row.push(data);
	console.log(data);
}
console.log(row);