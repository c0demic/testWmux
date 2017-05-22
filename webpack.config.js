/*import path from 'path';
import webpack from 'webpack';
import ROOT_PATH = path.resolve(__dirname);
*/

var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: {
        DbApp: path.resolve(ROOT_PATH, 'src/main/webapp/DbApp/index.jsx')
    },
    output:{
        path: path.resolve(ROOT_PATH, 'src/main/webapp/DbApp'),
        filename: 'dbapp.bundle.js',
        publicPath: '/public/'
    },
    /*
    externals: {
        'react': 'React'
    },
    */
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.js','.jsx'],
        alias: {
            approot: 'src/main/webapp'
        }
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                use: [
                    {
                     /*   loader: 'jsx-loader?insertPragma=React.DOM&harmony'*/
                        loader: 'jsx-loader?harmony'
                    }
                ]
            },
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ["es2015","stage-0","react"],
                            plugins: [
                                "transform-es2015-classes",
                                "transform-decorators-legacy",
                                "transform-class-properties",
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    {
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]___[hash:base64:5]'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }

};
