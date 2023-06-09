const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Environment variables
const PORT = process.env.PORT || 2023;
const uri = process.env.MONGODB_URI;


mongoose.set("strictQuery", false);
// Database connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });


// Middleware
app.use(cors());
app.use(express.json());

  app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;