let path = require('path')
let fs = require('fs')
let utils = require('./utils')
let config = require('../config')
let webpack = require('webpack')
let merge = require('webpack-merge')
let vueLoaderConfig = require('./vue-loader.conf')
let MpvuePlugin = require('webpack-mpvue-asset-plugin')
let glob = require('glob')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let relative = require('relative')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntry (rootSrc) {
  let map = {};
  glob.sync(rootSrc + '/pages/**/main.js')
  .forEach(file => {
    let key = relative(rootSrc, file).replace('.js', '');
    map[key] = file;
  })
   return map;
}

const appEntry = { app: resolve('./src/main.js') }
const pagesEntry = getEntry(resolve('./src'), 'pages/**/main.js')
const entry = Object.assign({}, appEntry, pagesEntry)

let baseWebpackConfig = {
  // 如果要自定义生成的 dist 目录里面的文件路径，
  // 可以将 entry 写成 {'toPath': 'fromPath'} 的形式，
  // toPath 为相对于 dist 的路径, 例：index/demo，则生成的文件地址为 dist/index/demo.js
  entry,
  target: require('mpvue-webpack-target'),
  output: {
    path: config.build.assetsRoot,
    jsonpFunction: 'webpackJsonpMpvue',
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'mpvue',
      '@': resolve('src')
    },
    symlinks: false,
    aliasFields: ['mpvue', 'weapp', 'browser'],
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: Object.assign({checkMPEntry: true}, vueLoaderConfig)
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    // api 统一桥协议方案
    new webpack.DefinePlugin({
      'mpvue': 'global.mpvue',
      'mpvuePlatform': 'global.mpvuePlatform'
    }),
    new MpvuePlugin(),
    new CopyWebpackPlugin([{
      from: '**/*.json',
      to: ''
    }], {
      context: 'src/'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(config.build.assetsRoot, './static'),
        ignore: ['.*']
      }
    ])
  ]
}

// 针对百度小程序，由于不支持通过 miniprogramRoot 进行自定义构建完的文件的根路径
// 所以需要将项目根路径下面的 project.swan.json 拷贝到构建目录
// 然后百度开发者工具将 dist/swan 作为项目根目录打
const projectConfigMap = {
  tt: '../project.config.json',
  swan: '../project.swan.json'
}

const PLATFORM = process.env.PLATFORM
if (/^(swan)|(tt)$/.test(PLATFORM)) {
  baseWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, projectConfigMap[PLATFORM]),
        to: path.resolve(config.build.assetsRoot)
      }])
    ]
  })
}
if (/^wx$/.test(PLATFORM)) {
  baseWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new CopyWebpackPlugin([{
        from: resolve('node_modules/vant-weapp/dist'),
        to: resolve('dist/wx/vant-weapp/dist'),
        ignore: ['.*']
      }])
    ]
  })
}
module.exports = baseWebpackConfig