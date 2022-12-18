const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/static/js/index.js',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 4000
    },
    output: {
        path: path.resolve(__dirname, 'src/static/dist'),
        filename: 'bundle.js',
    },
    watch: true,
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            { test: /\.txt$/, use: 'raw-loader' }
        ],
    },
}