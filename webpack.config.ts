import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import {Configuration} from "webpack";
import "webpack-dev-server";

const config: Configuration = {
    entry: './app/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*.html",
                    globOptions: {
                        ignore: [
                            '**/index.html'
                        ]
                    },
                    context: "app",
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'My AngularJS application',
            template: path.resolve(__dirname, "app/index.html"),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    devServer: {
        watchFiles: ['app/**/*'],
        devMiddleware: {
            writeToDisk: true
        }
    }
};

module.exports = config;