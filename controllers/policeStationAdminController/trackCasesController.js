const TrackCase = require("../../models/policeStationAdminModel/trackCaseModel");

const trackCases = async (req, res) => {

  try {

    const trackedCases = await TrackCase
      .find()
      .populate("caseId")
      .populate("officerId");

    res.status(200).json(trackedCases);

  } catch (error) {

    res.status(500).json({
      message: "Error tracking cases",
      error: error.message
    });

  }

};

module.exports = trackCases;