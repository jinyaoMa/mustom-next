const path = require("path");

console.log(path.join(__dirname, "lib"));
console.log(path.join(__dirname, "svg"));

module.exports = {
  output: path.join(__dirname, "lib"), // output directory, default: fonts
  svgsPath: path.join(__dirname, "svg"), // svgs source, default: svgs
  fontName: "mn-icons", // font family name, default: iconfont
  cssPrefix: "mn", // css class prefix, default: icon
  className: "mn-icon", // common class name, default: iconfont
  fontFileName: "mn-icons", // output file name, default: iconfont
  fontHeight: 1024
};
