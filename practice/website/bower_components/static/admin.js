// 处理删除电影数据的逻辑
$(function(){
	$('.del').click(function(e){
		var target = $(e.target); //先拿到当前按钮
		var id = target.data('id'); //拿到当前按钮赋值id
		var tr = $('.item-id-' + id); //拿到表格中的这一行，因为删除数据后希望一整行也删除，这样从展现看数据是没了
		
		$.ajax({
			type: 'DELETE',
			url: 'admin/movie/list?id=' + id
		})
		.done(function(results){ //删除后希望服务器返回状态
			if(results.success === 1){ //为1说明删除成功
				if(tr.length > 0){ //如果当前这行确实有
					tr.remove();
				}
			}
		});
	});
});