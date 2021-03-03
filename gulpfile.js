const path = require("path");
const { src, dest } = require("gulp");
const stylus = require("gulp-stylus");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function compile() {
  return src(path.join(__dirname, "packages/style-default/src/*.styl"))
    .pipe(
      stylus({
        "include css": true
      })
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS())
    .pipe(dest(path.join(__dirname, "build/style-default/")));
}

exports.build = compile;
