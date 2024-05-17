const express = require("express");
const app = express();
app.set("view engine", "ejs");

require("./pkg/db/index.js");

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
