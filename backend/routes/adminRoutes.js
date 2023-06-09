const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {
  ensureAuthenticated,
  ensureAdmin,
} = require("../middleware/authMiddleware");


// Register a new admin
router.post("/", adminController.createAdmin);

// Register driver
router.post('/register-driver', ensureAuthenticated, ensureAdmin, adminController.createDriver);
module.exports = router;

// Delete driver by ID
router.delete(
  "/registered-driver/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.deleteDriver
);

// Update driver data
router.put(
  "/registered-driver/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.updateDriver
);

// Register garbage truck
router.post('/register-garbage-truck', ensureAuthenticated, ensureAdmin, adminController.createTruck);