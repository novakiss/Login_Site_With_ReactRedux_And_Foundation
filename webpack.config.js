module.exports = {
    entry: './src/index',
    mode: "production",
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    performance: {
        hints: false
    },
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