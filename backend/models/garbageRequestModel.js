const mongoose = require("mongoose");

const garbageRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  requestedDate: {
    type: Date,
    required: true,
  },
  requestedTime: {
    type: Date,
    required: true,
  },
});

const GarbageRequest = mongoose.model("GarbageRequest", garbageRequestSchema);

module.exports = { GarbageRequest };
