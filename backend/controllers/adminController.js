const { Admin } = require("../models/adminModel");
const bcrypt = require("bcrypt");

// Register admin
exports.createAdmin = async (req, res) => {
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    console.log("Salt:", salt);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log("Hashed Password:", hashedPassword);

    // Create admin object
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role || "admin",
      password: hashedPassword,
    });

    // Save admin to database
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error.message });
  }
};
