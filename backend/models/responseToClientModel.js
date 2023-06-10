const mongoose = require("mongoose");

const responseToClientSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  truckLicenseNumber: {
    type: String,
    required: true,
  },
  driverContact: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected", "Completed"],
    default: "Pending",
  },
});

const ClientResponse = mongoose.model(
  "ResponseToClient",
  responseToClientSchema
);
module.exports ={ClientResponse}
