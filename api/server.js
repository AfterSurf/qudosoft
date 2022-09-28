const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const products = require("./products.json");

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.get("/api/products", (req, res) => {
  res.json(products);
});
