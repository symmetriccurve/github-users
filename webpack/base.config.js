module.exports = function(){
	return(
		{
			entry: {
				app: './client/index.js',
			},
			module:{
				rules: [{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					],
				}]
			}
		}
	)
}
