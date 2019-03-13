const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/main.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    publicPath:'/'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader', 
          'css-loader' ,
          'postcss-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/',
              name:'[name].[hash:8].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  devServer: {
    contentBase: false,
    compress: false,
    inline: true,
    hot: true,
    quiet: true,
    port: 9000,
    clientLogLevel: 'warning',
    publicPath: '/',
    watchOptions: {
      poll: false
    }
  },
}