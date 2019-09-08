const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    { test: /\.(js|jsx)$/, loader: 'react-hot-loader!babel-loader', exclude: [path.resolve(__dirname, '/node_modules/')] },
    { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }) },
    { test: /\.css$/, loader: 'style-loader!css-loader' },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=./src/assets/images/[name].[ext]" },
    // { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader",
    //     options: {
    //         name: '[name]-[hash:8].[ext]',
    //         publicPath: './assets/images/',
    //         outputPath: './assets/images/'
    //     } 
    // },
    { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: "file-loader?name=./src/assets/fonts/[name].[ext]"}
];