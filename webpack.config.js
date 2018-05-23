const webpack = require('webpack');
//const env = process.env.NODE_ENV;


module.exports = {
    //mode: env,
    entry: ['./src/index',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react','es2015'],
                    }
                }
            },
        ]
    }
};