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
    tailwindcss: {},
  },
}
