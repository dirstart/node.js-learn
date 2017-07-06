// var a=10;
// for(var i=0;i<plus(a);i++){
// 	console.log("执行了"+i+"次");
// }

// function plus(a){
// 	++a;
// 	return a;
// }



class RangeIterator{
	constructor(start,stop){
		this.value=start;
		this.stop=stop;
	};

	[Symbol.iterator](){return this;}
	next(){
		var value=this.value;
		if(value<this.stop){
			this.value++;
			return {done:false,value:value}
		}else{
			return {done:true,value:undefined};
		}
	}
}

console.log("this is complex version");
for(var key of range(7,9)){
	console.log(key);
}

function range(start,stop){
	return new RangeIterator(start,stop);
}



function* easy_version(start,stop){
	for(var i=start;i<stop;i++)
		yield i;
}

console.log("this is generator");
for(var key of easy_version(9,14)){
	console.log(key);
}
