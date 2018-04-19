/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-18 11:23:35
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-04-19 21:03:49
 */

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://dev.mdguanjia.com/bop/"'
})
