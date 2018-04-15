var mongoose=require('mongoose');

//关于这个Schema文件，主要为实例化为模型做准备，在没有实例化为model之前，没有办法操纵数据库
var UserSchema=new mongoose.Schema({
	name:{
		unique:true,
		//唯一的
		type:String
	},
	password:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
});

UserSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now();
		// 判断是否是新加的，若是新加的则让更新时间和创建时间一致
		// 若是再次保存，则只更新最新的更新时间
	}else{
		this.meta.updateAt=Date.now();
	}
	next();
});

// 定义静态方法，静态方法在Model层就能够使用
UserSchema.statics={
	// 用fetch方法获取所有的数据
	fetch:function(callback){
		return this
		.find({})
		.sort('meta.updateAt')
		.exec(callback);
		// 根据更新的时间排序
	},
	findById:function(id,callback){
		return this
		.findOne({_id:id})
		.exec(callback);
	}
};

module.exports=UserSchema;
