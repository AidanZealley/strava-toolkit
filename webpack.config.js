const globImporter = require('node-sass-glob-importer');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader?url=false"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                          importer: globImporter()
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    devServer: {
        port: 3000
    }
};