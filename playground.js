const path = require("path");
const sourceDir = path.join(__dirname, "docs");
console.log(sourceDir);

console.log(
  require("./theme/scripts/node/util").generateDocsStructure(sourceDir)
);
