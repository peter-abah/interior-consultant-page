'use strict';

const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');

const css = (callback) => {
  const processors = [
    require('tailwindcss'),
    require('autoprefixer'),
  ];

  src('./src/css/**/*.css')
    .pipe(postcss(processors))
    .pipe(dest('./css'));
  callback();
};

const watchFiles = (callback) => {
  watch('./index.html', css);
  callback();
};

exports.default = series(css, watchFiles);
exports.css = css;