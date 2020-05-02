const path = require('path');
webpack = require('webpack'),
polyfill = require('@babel/polyfill'); 


module.exports = {
    mode: 'development',
    entry: {
        currency: ['@babel/polyfill', './App/index.jsx'],
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    output: {
       path: path.resolve(__dirname,'./Server/public/'),
       publicPath: '/',
       filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']  
                    }
                }],
            },
            {
                test: /\.(ttf)$/,
                  use: [
                    {
                      loader: 'url-loader',
                    }
                  ]
                }
        ]
    },
    resolve: {
       modules: [
         "node_modules",
          path.resolve(__dirname, "App/")
       ],
       extensions: [".js", ".json", ".jsx"]
     },
    devtool: "source-map"
};
