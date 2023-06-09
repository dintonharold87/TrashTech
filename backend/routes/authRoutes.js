const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/", authController.login);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
