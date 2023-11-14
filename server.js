const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const productsRoutes = require("./routes/products.routes")
const providersRoutes = require("./routes/providers.routes")

app.use('/api/products',productsRoutes);
app.use('/api/providers',providersRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});