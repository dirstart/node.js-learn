var path = require('path');
// var htmlWebpackPlugin=require('html-webpack-plugin');

// console.log("现在的路径是"+path.resolve(__dirname,'/the_last_webpack/app/'));
//如果是 path.resolve(__dirname,'/app/');
//它会输入 ==>  E:/app 

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.(js|jsx)$/,
			loader: "babel-loader",
			// exclude:path.resolve(__dirname,'/the_last_webpack/node_modules/'),
			exclude: /node_modules/,
			//我的上面和下面都是对的，再下方也是对的，但是，为什么path.resolve(__dirname,/app/)是错的？
			// include:/app/,  这样也是对的
			include: path.resolve(__dirname, 'app'),
			// include:path.resolve(__dirname,'/app/main.js'),
			query: {
				presets: ["react", "es2015"]
			}
		}]
	}
	// plugins:[
	// 	new htmlWebpackPlugin({
	// 		filename:'index.html',
	// 		filename:'index.html'
	// 	})
	// ]
}