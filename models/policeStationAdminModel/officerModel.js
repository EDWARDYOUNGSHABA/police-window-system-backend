const mongoose = require("mongoose");

const officerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  badgeNumber: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  stationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PoliceStation",
    required: true
  },

  role: {
    type: String,
    default: "officer"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Officer", officerSchema);