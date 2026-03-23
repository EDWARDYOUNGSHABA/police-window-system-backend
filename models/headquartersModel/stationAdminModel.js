const mongoose = require("mongoose");

const stationAdminSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
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
    default: "stationAdmin"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("StationAdmin", stationAdminSchema);