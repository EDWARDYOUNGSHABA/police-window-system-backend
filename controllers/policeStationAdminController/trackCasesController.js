const Case = require("../../models/policeOfficerModel/caseModel");

const trackCases = async (req, res) => {
  try {

    const { stationId } = req.query;

    if (!stationId) {
      return res.status(400).json({
        message: "stationId is required"
      });
    }

    const cases = await Case
      .find({ stationId })
      .populate("officer");

    if (!cases.length) {
      return res.status(404).json({
        message: "No cases found for tracking in this station"
      });
    }

    res.status(200).json({
      count: cases.length,
      cases
    });

  } catch (error) {
    res.status(500).json({
      message: "Error tracking cases",
      error: error.message
    });
  }
};

module.exports = trackCases;