const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use("/", indexRoute);
app.use("/", aboutRoute);

app.use(express.static("pubilc"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
