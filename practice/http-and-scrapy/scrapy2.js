var http=require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';

String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

http.get(url,function(res){
	var html='';

	res.on('data',function(data){
		html+=data;
	});

	res.on('end',function(){
		var courseData=filterChapters(html);
		printCourse(courseData);
	});
}).on('error',function(){
	console.log("获取数据出错");
});

function filterChapters(html){
	var $=cheerio.load(html);
	var chapters=$('.chapter');
	// console.log( chapters);

	var courseData=[];

	chapters.each(function(item){
		var chapter=$(this);
		var chapter_title=chapter.find('strong').text();
		// console.log(chapter_title);
		var section_group=chapter.find('.video').children('li');
		// console.log(chapter_section);

		var chapterData={
			chapterTitle:chapter_title,
			chapterGroup:[]
		};

		section_group.each(function(item){
			// console.log(item);
			var tem_group=$(this).find('.J-media-item');
			var tem_title=tem_group.text();
			var tem_id=tem_group.attr("href").split("/video/")[1];
			// console.log(tem_id);

			chapterData.chapterGroup.push({
				title:tem_title,
				id:tem_id
			});
		});

		courseData.push(chapterData);
	});
	// console.log(courseData);


	return courseData;
}

function printCourse(courseData){
	courseData.forEach(function(item){
		var chapter_title=item.chapterTitle.trim();
		console.log(chapter_title.split("  ")[0]);
		//我真是机智，用这种简单的办法排除掉了后面的东西

		item.chapterGroup.forEach(function(xx){
			console.log('-------['+xx.id+']'+xx.title.trim().split("   ")[0]);
		});
	});
}
function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
// [{
// 	chapterTitle:'',
// 	chapterGroup:[]
// }]

