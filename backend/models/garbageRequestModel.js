const mongoose = require("mongoose");
const { Client } = require("./clientModel");

const garbageRequestSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  requestedDate: {
    type: String,
    required: true,
  },
  requestedTime: {
    type: String,
    required: true,
  },
});

const GarbageRequest = mongoose.model("GarbageRequest", garbageRequestSchema);

module.exports = { GarbageRequest };
