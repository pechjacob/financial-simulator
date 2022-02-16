
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./financial-simulator.cjs.production.min.js')
} else {
  module.exports = require('./financial-simulator.cjs.development.js')
}
