const path = require('path')
const express = require('express')
const logger = require('./logger')

const argv = require('minimist')(process.argv.slice(2))
const bootstrap = require('./bootstrap')
const resolve = require('path').resolve
const app = express()

if (process.env.APP) {
  bootstrap(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
    templatePath: resolve(process.cwd(), 'src', 'index.ejs')
  })
}

app.use('/assets', express.static(path.join(__dirname, 'public')))

const port = argv.port || process.env.PORT || 3030

app.listen(port, err => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port)
})
