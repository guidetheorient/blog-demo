const path = require('path')
const pathArr = __dirname.split(path.sep);
let dirname = pathArr[pathArr.length - 1]
let parentDirname = pathArr[pathArr.length - 2]

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? `/${parentDirname}/${dirname}/dist/`
  : '/'
}
