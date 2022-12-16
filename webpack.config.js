const path = require('path');
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

    module: {
        rules: [
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
        ],
    },
}