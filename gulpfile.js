const path = require("path");
const { series, src, dest } = require("gulp");
const stylus = require("gulp-stylus");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function doConponents() {
  return src(path.join(__dirname, "packages/style-default/src/*.styl"))
    .pipe(stylus())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS())
    .pipe(dest(path.join(__dirname, "build/style-default/")));
}

function doTheme() {
  return src(path.join(__dirname, "packages/theme-default/*.styl"))
    .pipe(stylus())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS())
    .pipe(dest(path.join(__dirname, "build/theme-default/")));
}

exports.build = series(doConponents, doTheme);
