const colors = require('../../colors')

module.exports = {
  'button-tertiary-color-fg': {
    DEFAULT: colors.light[700],
    dark: colors.dark[300],

    hover: {
      DEFAULT: colors.light[800],
      dark: colors.dark[100],
    },
  },

  'button-tertiary-color-bg': {
    hover: {
      DEFAULT: colors.light[50],
      dark: colors.dark[800],
    },
  },
}
