const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/global/index.jsx",
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist", "js"),
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.(gif|jpg|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]",
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [ "@babel/preset-env",
                                {
                                    targets: "defaults",
                                },
                            ],
                            [ "@babel/preset-react",
                                {
                                    runtime: "automatic",
                                    importSource: "react"
                                },
                            ],
                        ],
                    },
                },
            },
            
        ],
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: "./src/features/blog/orePamphlet/assets",
        //             to: "../assets/orePamphlet"
        //         },
        //     ],
        //     options: {
        //         concurrency: 100
        //     }
        // }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000,
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: '/index.html' }
            ]
        },
        devMiddleware: {
            writeToDisk: (filePath) => /\\dist\\assets\\/.test(filePath)
        }
    }
};
