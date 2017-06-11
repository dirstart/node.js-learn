var student=require('./student');
var teacher=require('./teacher');

teacher.add('Scott');

function add(teacherName,students){
	teacher.add(teacherName);

	students.forEach(function(item,index){
		student.add(item);
	});
}
// var a=['212','abac','2121fsf'];
// add('hhh',a);    

exports.add=add;
// module.exports=add;