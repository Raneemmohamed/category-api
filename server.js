require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use("/api/categories", require('./routes/categoryRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
