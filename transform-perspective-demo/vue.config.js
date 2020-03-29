const path = require('path')
const pathArr = __dirname.split(path.sep)
const dirname = pathArr[pathArr.length - 1]
const parentDirname = pathArr[pathArr.length - 2]

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${parentDirname}/${dirname}/dist/`
    : '/',
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
