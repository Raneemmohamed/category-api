require("dotenv").config({ path: "./.env" });

const express = require("express");
const connectDB = require("./db");
const categoryRoutes = require("./routes/categoryRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json());
app.use("/api/categories", require('./routes/categoryRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
