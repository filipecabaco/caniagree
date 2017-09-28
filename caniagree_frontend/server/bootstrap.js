const path = require('path')

const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    stats: {
      colors: true
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem

  app.use('*', (req, res, next) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
}

module.exports = (app, options) => {
  const webpackConfig = require('../webpack/webpack.dev.babel')
  addDevMiddlewares(app, webpackConfig)

  return app
}
