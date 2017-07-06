var words=[12,1,223,undefined,12,1];
var uniqueWords=new Set(words);
for(var value of uniqueWords){
	console.log(value);
}

var phoneBookMap=[{1,3},{2,4}];
for(var [key,value] of phoneBookMap){
	console.log(key+"'s phone number is :"+value);
}