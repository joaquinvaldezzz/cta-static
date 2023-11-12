const sorting = require('./utils/sorting.cjs')

module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' && {
      preset: [
        'default',
        {
          cssDeclarationSorter: false,
        },
      ],
    },
    'postcss-sort-media-queries': {},
    'postcss-sorting': {
      order: [...sorting.order],
      'properties-order': [...sorting.propertiesOrder],
      'unspecified-properties-position': 'bottom',
    },
    tailwindcss: {},
  },
}
