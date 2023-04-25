const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});