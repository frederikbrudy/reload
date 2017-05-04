import path from 'path';
let options = {};

const config = {
    entry: {
        reload: './src/public/reload.js',
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=.babel_cache',
                },
            },
        ],
    },
    plugins: [

    ],
};

export default config;
