const path = require('path')

module.exports = function nuxtBulma(options) {
  // Add CSS
  this.options.css.push('bulma/bulma.sass')
}

module.exports.meta = require('./package.json')
