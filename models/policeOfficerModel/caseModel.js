const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({

    caseTitle: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    crimeType: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Open", "Under Investigation", "Closed"],
        default: "Open"
    },

    officer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Officer"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Case", caseSchema);