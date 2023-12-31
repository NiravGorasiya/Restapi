require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
require("./db/databaseconnection")
app.use(express.json());

// Use the product router
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
