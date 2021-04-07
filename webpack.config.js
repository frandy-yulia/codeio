const path = require('path')

module.exports = {
    target: 'electron-renderer',
    mode: 'production',
    entry: path.resolve(__dirname,'src','browser','index.js'),
    output: {
        path: path.resolve(__dirname,'out','browser'),
        filename: 'renderer.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
}