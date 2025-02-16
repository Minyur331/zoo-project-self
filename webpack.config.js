const path = require('path');

module.exports = {
    entry: "./src/global/index.jsx",
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist", "js"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
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
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: "/index.html" }

            ],
        }

    },

};
