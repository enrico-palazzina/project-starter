const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/main.js', 'build/js')
  .sass('src/scss/app.scss', 'build/css')
  .options({
    postCss: [
      tailwindcss('./tailwind.config.js')
    ],
  });