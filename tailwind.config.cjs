const { fontFamily } = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const {
  blurs,
  boxShadows,
  colors,
  fontSizes,
  textVariables,
  borderVariables,
  foregroundVariables,
  backgroundVariables,
  buttonPrimaryVariables,
  buttonSecondaryVariables,
  buttonSecondaryColorVariables,
  buttonTertiary,
  buttonTertiaryColor,
  buttonPrimaryErrorVariables,
  buttonSecondaryErrorVariables,
  buttonTertiaryErrorVariables,
} = require('./untitled-ui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.astro',
    './src/layouts/**/*.astro',
    './src/pages/**/*.astro',
    './src/scripts/**/*.js',
    './src/sections/**/*.astro',
    './src/snippets/**/*.astro',
  ],
  darkMode: 'class',
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
      screens: {
        xl: '1280px',
      },
    },

    blur: { ...blurs },
    boxShadow: { ...boxShadows },
    colors: { ...colors },
    fontSize: { ...fontSizes },

    extend: {
      colors: {
        ...textVariables,
        ...borderVariables,
        ...foregroundVariables,
        ...backgroundVariables,

        ...buttonPrimaryVariables,
        ...buttonSecondaryVariables,
        ...buttonSecondaryColorVariables,
        ...buttonTertiary,
        ...buttonTertiaryColor,
        ...buttonPrimaryErrorVariables,
        ...buttonSecondaryErrorVariables,
        ...buttonTertiaryErrorVariables,
      },

      data: {
        status: 'status="true"',
        error: 'error="true"',
      },

      fontFamily: {
        sans: ['Mona Sans', ...fontFamily.sans],
        display: [
          ['Mona Sans', ...fontFamily.sans],
          {
            fontVariationSettings: '"wdth" 125',
          },
        ],
      },

      minWidth: {
        xs: '320px',
      },

      spacing: {
        header: 'var(--header-height)',
        3.5: '0.875rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
      },

      typography: (theme) => ({
        base: {
          css: {},
        },
        DEFAULT: {
          css: {
            lineHeight: 1.5,
            maxWidth: 'none',
            'h1, h2, h3, h4, h5, h6': {
              fontVariationSettings: '"wdth" 125',
            },
            h2: {
              fontWeight: theme('fontWeight.semibold'),
              fontSize: theme('fontSize[display-xs][0]'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('fontSize[display-xs][1].lineHeight'),
            },
            ul: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
            'ol > li': {
              // paddingLeft: 0,
            },
          },
        },
      }),
    },
  },

  plugins: [
    typography,
    forms({
      strategy: 'class',
    }),
  ],
}
