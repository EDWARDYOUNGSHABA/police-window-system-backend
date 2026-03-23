const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({

  caseTitle: String,
  description: String,
  crimeType: String,
  location: String,

  officer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Officer"
  },

  stationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PoliceStation"
  },

  status: {
    type: String,
    default: "Reported"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Case", caseSchema);