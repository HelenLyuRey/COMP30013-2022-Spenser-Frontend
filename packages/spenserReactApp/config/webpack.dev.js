
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spenser-app',
            remotes: {
                trackerVue: 'trackerVue@http://localhost:4000/remoteEntry.js'
            },
            shared: packageJson.dependencies
        })
    ]
};


module.exports = merge(commonConfig, devConfig)