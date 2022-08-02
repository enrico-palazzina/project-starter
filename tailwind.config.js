const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  darkMode: false,
  // *** Enable this to scan classes in specific files
  // content: [
  //   './woocommerce/**/*.php',
  //   './template-page/**/*.php',
  //   './template-parts/**/*.php',
  //   './footer.php',
  //   './front-page.php',
  //   './header.php',
  //   './index.php',
  // ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          '--gutter': '2rem',
          '@screen sm': {
            '--gutter': `calc((100vw - ${theme('screens').sm} + 4rem) / 2)`
          },
          '@screen md': {
            '--gutter': `calc((100vw - ${theme('screens').md} + 4rem) / 2)`
          },
          '@screen lg': {
            '--gutter': `calc((100vw - ${theme('screens').lg} + 4rem) / 2)`,
          },
          '@screen xl': {
            '--gutter': `calc((100vw - ${theme('screens').xl} + 4rem) / 2)`,
          },
          '@screen 2xl': {
            '--gutter': `calc((100vw - ${theme('screens')['2xl']} + 4rem) / 2)`
          }
        }
      })
    }),
  ],
}