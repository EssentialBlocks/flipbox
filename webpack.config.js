const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const plugins = defaultConfig.plugins.filter(
	(plugin) =>
		plugin.constructor.name != "MiniCssExtractPlugin" &&
		plugin.constructor.name != "CleanWebpackPlugin"
);

let allEntries = {
	dist: "./src/index.js",
	"lib/style-handler/dist": "./lib/style-handler/style-handler.js",
};

const config = {
	...defaultConfig,
	entry: allEntries,
	output: {
		path: path.resolve(__dirname),
		filename: "[name]/index.js",
	},
	plugins: [
		...plugins,
		new MiniCSSExtractPlugin({
			filename: "dist/style.css",
		}),
	],
};

module.exports = config;
