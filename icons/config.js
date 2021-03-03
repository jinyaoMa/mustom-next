const path = require("path");
const fs = require("fs");

if (!fs.existsSync("build/")) {
  fs.mkdirSync("build/");
  fs.mkdirSync("build/icons/");
} else if (!fs.existsSync("build/icons/")) {
  fs.mkdirSync("build/icons/");
}

module.exports = {
  output: "build/icons", // output directory, default: fonts
  svgsPath: path.join(__dirname, "svg"), // svgs source, default: svgs
  fontName: "mustom-next-icons", // font family name, default: iconfont
  cssPrefix: "mn-icon", // css class prefix, default: icon
  className: "mn-icon", // common class name, default: iconfont
  fontFileName: "mustom-next-icons" // output file name, default: iconfont
};
