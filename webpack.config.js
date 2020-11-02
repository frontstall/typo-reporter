let libraryName = 'TypoReporter';

const getConfig = (env, argv) => {
	let outputFile;

	if (argv.mode === 'production') {
		outputFile = libraryName + '.min.js';
	} else {
		outputFile = libraryName + '.js';
	}

	return {
		devtool: 'source-map',
		output: {
			path: __dirname + '/lib',
			filename: outputFile,
			library: libraryName,
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		module: {
			rules: [
				{
					test: /(\.jsx|\.js)$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				}
			]
		}
	};
};

module.exports = getConfig;
