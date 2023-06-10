const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {
  ensureAuthenticated,
  ensureAdmin,
} = require("../middleware/authMiddleware");

// Register a new admin
router.post("/admins", adminController.createAdmin);

// Register driver
router.post(
  "/drivers",
  ensureAuthenticated,
  ensureAdmin,
  adminController.createDriver
);

// Delete driver by ID
router.delete(
  "/drivers/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.deleteDriver
);

// Update driver data
router.put(
  "/drivers/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.updateDriver
);

// Get all drivers
router.get(
  "/drivers",
  ensureAuthenticated,
  ensureAdmin,
  adminController.getAllDrivers
);

// Get a specific Driver details
router.get(
  "/drivers/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.getDriverById
);

// Register garbage truck
router.post(
  "/garbage-trucks",
  ensureAuthenticated,
  ensureAdmin,
  adminController.createTruck
);

// View all trucks
router.get(
  "/garbage-trucks",
  ensureAuthenticated,
  ensureAdmin,
  adminController.getAllTrucks
);
// view details of a specific truck
router.get(
  "/garbage-trucks/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.getGarbageTruckById
);

// delete a truck
router.delete(
  "/garbage-trucks/:id",
  ensureAuthenticated,
  ensureAdmin,
  adminController.deleteTruck
);

// View garbage requests from clients
router.get('/client-requests', ensureAuthenticated, adminController.getClientRequests);

// Respond to a request
router.post(
  "/client-requests/:requestId/respond",
  ensureAuthenticated,
  adminController.respondToRequest
);


module.exports = router;
