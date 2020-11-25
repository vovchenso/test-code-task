const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    public: path.resolve("public"),
    entry: path.resolve("src/boot.tsx"),
    html: path.resolve("public/index.html"),
    src: path.resolve("src")
};

module.exports = {
    devServer: {
        port: 31337,
        historyApiFallback: true,
        contentBase: paths.public,
        proxy: {
            '/api': {
                target: 'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer',
                pathRewrite: {'^/api' : ''},
                secure: false,
                changeOrigin: true
            }
        }
    },

    mode: "development",

    entry: paths.entry,

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            src: paths.src
        }
    },

    output: {
        filename: "[name].[chunkhash:8].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.html,
        })
    ]
};
