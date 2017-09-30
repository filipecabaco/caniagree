const path = require('path')
const webpack = require('webpack')
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = options => ({
  entry: Object.assign(
    {
      caniagree: path.join(process.cwd(), 'src/index.js')
    },
    options.entry
  ),
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
      filename: `[name].js`
    },
    options.output
  ), // Merge with env dependent settings
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: options.babelLoaderOptions
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(mp4|webm)$/,
        use: ['url-loader?limit=10000']
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    new CaseSensitivePlugin(),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.BannerPlugin({
      banner: `CanIAgree Application`
    }),
    new CopyWebpackPlugin([{ from: 'markup/assets', to: 'assets' }])
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.css', '.scss']
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: true
})
