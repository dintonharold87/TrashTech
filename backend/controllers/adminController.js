const { Admin } = require("../models/adminModel");
const { Driver } = require("../models/registerDriverModel");
const { GarbageTruck } = require("../models/truckModel");
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
// Create a new driver
exports.createDriver = async (req, res) => {
  try {
    const { name, contact, age, licenseNumber } = req.body;
    const driver = new Driver({ name, contact, age, licenseNumber });
    await driver.save();
    res.status(201).json({ message: "Driver created successfully", driver });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create driver" });
  }
};

// Update a driver
exports.updateDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contact, age, licenseNumber } = req.body;
    const updatedDriver = await Driver.findByIdAndUpdate(
      id,
      { name, contact, age, licenseNumber },
      { new: true }
    );
    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json({ message: "Driver updated successfully", driver: updatedDriver });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update driver" });
  }
};

// Delete a driver
exports.deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDriver = await Driver.findByIdAndRemove(id);
    if (!deletedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete driver' });
  }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};