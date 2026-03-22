const mongoose = require("mongoose");

const policeStationSchema = new mongoose.Schema(
{
    stationName: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = mongoose.model("PoliceStation", policeStationSchema);