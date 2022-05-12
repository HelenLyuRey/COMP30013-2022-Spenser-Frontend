const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }, {
                test: /\.(sass|css|scss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: "postcss-loader",
                    options: {
                      plugins: () => [
                        require("autoprefixer")()
                      ],
                    },
                  },
                  'sass-loader',
                ]
              },{
                test: /\.svg$/,
                use: [
                  {
                    loader: require.resolve('@svgr/webpack'),
                    options: {
                      prettier: false,
                      svgo: false,
                      svgoConfig: {
                        plugins: [{ removeViewBox: false }],
                      },
                      titleProp: true,
                      ref: true,
                    },
                  },
                  {
                    loader: require.resolve('file-loader'),
                    options: {
                      name: 'static/media/[name].[hash].[ext]',
                    },
                  },
                ],
                issuer: {
                  and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                },
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
            //   {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-react', '@babel/preset-env'],
            //             plugins: ['@babel/plugin-transform-runtime'],
            //         }
            //     }
            // }
        ]
    },
    plugins: [new VueLoaderPlugin()]
}