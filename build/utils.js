'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

// add by liujiang
const Glob = require('glob')
const fs = require('fs')
const control = require('../.control-version')
const urlPrefix = control.urlPrefix

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
  // 生产环境可能需要配置url前缀
  let prefix = process.env.NODE_ENV === 'production' ? urlPrefix : ''

  return path.posix.join(prefix, assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS
      ? [cssLoader, postcssLoader]
      : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
/**
 * 根据目录获取入口
 * add by liujiang
 * @param  {[type]} globPath [选取路径的正则表达式]
 * @param  {[Array]} targetPages [description]
 * @return {[type]}          [description]
 */
exports.getEntry = (globPath, targetPages) => {
  !globPath && (globPath = '../src/page/**/main.js') // 如果不存在，则默认
  globPath = path.resolve(__dirname, globPath)
  let entries = {}
  Glob.sync(globPath).forEach(function (entry) {
    let basename = path.basename(entry, path.extname(entry)),
      pathname = path.dirname(entry),
      paths = pathname.split('/'),
      folderName = paths[paths.length - 1],
      chunkName = folderName

    // 仅处理page路径下的js
    if (pathname.indexOf('page') > -1) {
      // && fileDir && fileDir.indexOf(("page") === 0)) {
      // entries[(fileDir ? fileDir + '/' : fileDir) + basename] =
      entries[chunkName] = pathname + '/' + basename
    }
  })
  // 目录页是否保留 -- add by liujiang
  if (process.env.NODE_ENV === 'production') {
    if (entries.index) {
      delete entries.index // 生产环境不使用目录页
    }
    // 是否指定了发布页面（单页）
    if (targetPages && targetPages instanceof Array) {
      // 判断字符串是否包含指定页面内容
      let judge = str => {
        for (let i in targetPages) {
          if (str.endsWith(targetPages[i])) {
            return true // 包含
          }
        }
        return false // 不包含
      }
      for (let key in entries) {
        let isTarget = judge(key)
        if (!isTarget) {
          delete entries[key]
        }
      }
    }
  } else {
    this.entry2JsonFile(entries) // 开发环境保留目录保存
  }

  console.log('---------------------------------------------\nentries:')
  console.log(entries)
  console.log('----------------------------------------------')

  return entries
}
/**
 * 生成entry对应的json文件
 * @param entries
 */
exports.entry2JsonFile = entries => {
  // console.log('entries:\n', entries)
  let json = {}
  if (entries) {
    for (let key in entries) {
      json[key] = key
    }
  }
  // console.log(json)

  // 同步写入文件
  let fd = fs.openSync(
    path.resolve(__dirname, '../src/page/index/entry.json'),
    'w'
  )
  fs.writeSync(fd, JSON.stringify(json), 0, 'utf-8')
  fs.closeSync(fd)
}
