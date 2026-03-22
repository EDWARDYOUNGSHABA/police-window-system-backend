const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({

  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case"
  },

  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Officer"
  },

  assignedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Assignment", assignmentSchema);