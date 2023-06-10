const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

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
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const clientRoutes = require("./routes/clientRoutes");
const authRoutes = require("./routes/authRoutes");

// Admin Routes
app.use('/api', adminRoutes);
// Client Routes
app.use('/api', clientRoutes);
// Auth Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
