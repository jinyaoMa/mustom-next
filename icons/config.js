const path = require("path");

module.exports = {
  output: path.join(__dirname, "lib"), // output directory, default: fonts
  svgsPath: path.join(__dirname, "svg"), // svgs source, default: svgs
  fontName: "mustom-next-icons", // font family name, default: iconfont
  cssPrefix: "mi", // css class prefix, default: icon
  className: "mi", // common class name, default: iconfont
  fontFileName: "mustom-next-icons", // output file name, default: iconfont
  fontHeight: 1024
};
