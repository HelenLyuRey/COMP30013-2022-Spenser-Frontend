const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },{
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                use: [ "style-loader", 
                    { 
                        loader: "css-loader", 
                        options: 
                        { 
                            import: true, 
                            url: true,
                        } 
                    },]
              }
              ,
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
            //   ,
            //   {
            //     test: /\.(png|jpg)$/,
            //     loader: 'url-loader'
            //   }
        ]
    },plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}