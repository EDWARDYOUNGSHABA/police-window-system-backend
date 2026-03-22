const mongoose = require("mongoose");

const trackCaseSchema = new mongoose.Schema({

  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true
  },

  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Officer",
    required: true
  },

  status: {
    type: String,
    enum: [
      "Reported",
      "Under Investigation",
      "Evidence Collected",
      "Suspect Identified",
      "Closed"
    ],
    default: "Reported"
  },

  progressNote: {
    type: String
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("TrackCase", trackCaseSchema);