const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
