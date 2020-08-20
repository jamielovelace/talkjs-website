const plugin = require('tailwindcss/plugin')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fontFamily: {
      body: ['Freight Sans Pro', 'sans-serif'],
    },
    colors: {
      primary: {
        default: '#0E127C',
        light: '#1820D8',
        dark: '#080A45',
      },
      secondary: {
        default: '#77F3D5',
        light: '#D5FBF2',
        dark: '#19EBB9',
      },
      grey: {
        default: '#CAD1CF',
        light: '#EEF6F4',
        dark: '#566360',
      },
      dark: '#080A45',
      white: '#ffffff',
      body: '#5B5B6C',
    },
    typography: {
      default: {
        css: {
          color: '#5B5B6C',
          a: {
            color: '#0E127C',
            '&:hover': {
              color: '#AEBFAB',
            },
          },
          h1: {
            color: '#080A45',
          },
          h2: {
            color: '#0E127C',
          },
        },
      },
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(14, 18, 124, 0.35)',
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      minHeight: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      const positions = {
        '.top-full': {
          top: '100%',
        },
        '.bottom-full': {
          bottom: '100%',
        },
        '.left-full': {
          left: '100%',
        },
        '.right-full': {
          right: '100%',
        },
      }

      addUtilities(positions, ['responsive', 'hover'])
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
