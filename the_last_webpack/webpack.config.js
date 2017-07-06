var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:"./app/main.js",
	output:{
		path:path.resolve(__dirname,'./build/'),
		filename:'bundle.js'
	},
	module:{
		loaders:
		[{
			test:/\.html$/,
			loader:'html-loader'
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			filename:'index.html'
		})
	]
}