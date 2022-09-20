module.exports = {
	entry: {
		bundle: "./src/index.ts",
	},
	output: {
		path: `${__dirname}/dist`,
		filename: "bundle.js",
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: {
		directory: `${__dirname}/dist`,
		},
		open: true,//勝手に立ち上がる
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
		],
	},
	performance: { hints: false },
};