const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const products = require("./products.json");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/submit", (req, res) => {
  console.log("Hier ist der body: ", req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
