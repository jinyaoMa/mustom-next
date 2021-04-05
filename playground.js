const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "./docs/.vuepress/dist")));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
