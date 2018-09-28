require('./check-versions')()

if (!process.env.NODE_ENV) {
  var config = require('../config')
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig =
  process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable
var app = express()
var router = express.Router()

// mock start  add by  shenjb @20171020
router.use('/', function (req, res, next) {
  let url = req.path
  if (
    !(
      /\.(js|css|ttf|flash|media|jpg|png|gif|dll|cab|CAB|ico|vbs|html|htm|json)$/.test(
        url
      ) || /__webpack_hmr$/.test(url)
    )
  ) {
    // default is mock mode
    let urlEXTFlag = 1
    // FileModuleExt is  of exclude config
    config.dev.FileModuleExt.forEach((urlEXT, index, urlsEXT) => {
      if (url.indexOf(urlEXT) !== -1) urlEXTFlag = 0
    })
    // is mock or not && proxyMode
    switch (urlEXTFlag && config.dev.proxyMode) {
      case 'file':
        let data =
          '../mocker/' +
          url.substring(
            url.indexOf(config.dev.assetsPublicPath) +
              config.dev.assetsPublicPath.length,
            url.length
          ) +
          '.json'
        // add by shenjb  增加缓存清除部分 免重启
        delete require.cache[require.resolve(data)]
        res.json(require(data))
        break
      default:
        // print the url or access  proxy
        console.log(url)
        next()
        break
    }
  } else {
    next()
  }
})
// mock end

app.use(router)
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

// proxy api requests -start
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(context, proxyMiddleware(options))
})
// proxy api requests -end

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(
  config.dev.assetsPublicPath,
  config.dev.assetsSubDirectory
)
app.use(staticPath, express.static('../src/assets'))

var uri =
  'http://localhost:' + port + config.dev.assetsPublicPath + 'index.html'

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
    // config.dev.autoOpenBrowser = false
  }
})
