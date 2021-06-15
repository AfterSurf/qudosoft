const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const products = require('./products.json');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/products", (req, res) => {
    res.json(products);
});
