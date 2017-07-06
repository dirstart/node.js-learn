var test_arr1=[1,2,434];
var test_arr2=['chen','hong','shan'];
function consoleArray(myArray){
	for(var index=0;index<myArray.length;index++){
		console.log(myArray[index]);
	}
}

// consoleArray(arr);
// consoleArray(arr2);
// consoleArray("and this is two:"+arr2);

function es5Console(myArray){
	console.log("es5");
	myArray.forEach(function(value){
		console.log(value);
		if(value>=2){
			return;
		}
	})
}

es5Console(test_arr1);
// es5Console(test_arr2);

function es6Console(myArray){
	console.log("es6");
	for(var value of myArray){
		console.log(value);
		if(value>=2){
			return;
		}
	}
}
// es6Console(test_arr2);
es6Console(test_arr1);

// function es6_test_for_of(){

// } 

for(var value of " "){
	console.log("now is:"+value);
}