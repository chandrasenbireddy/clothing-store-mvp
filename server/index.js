const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const productRoutes = require("./routes/products");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
