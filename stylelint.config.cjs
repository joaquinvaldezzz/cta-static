const sorting = require('./utils/sorting.cjs')

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],

  rules: {
    'max-nesting-depth': 3,
    'order/order': [...sorting.order],
    'order/properties-order': [...sorting.propertiesOrder],
    'order/properties-alphabetical-order': null,
    'prettier/prettier': true,
  },
}
