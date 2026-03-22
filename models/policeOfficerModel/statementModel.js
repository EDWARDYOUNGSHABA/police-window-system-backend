const mongoose = require("mongoose");

const statementSchema = new mongoose.Schema({

    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case",
        required: true
    },

    officer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Officer"
    },

    statementText: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Statement", statementSchema);