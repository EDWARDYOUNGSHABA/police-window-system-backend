const Case = require("../../models/policeOfficerModel/caseModel");

const registerCase = async (req, res) => {
  try {
    const { caseTitle, description, crimeType, location, officerId, stationId } = req.body;

    if (!caseTitle || !description || !crimeType || !location || !officerId || !stationId) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newCase = new Case({
      caseTitle,
      description,
      crimeType,
      location,
      officer: officerId,
      stationId: stationId
    });

    await newCase.save();

    res.status(201).json({
      message: "Case registered successfully",
      case: newCase
    });

  } catch (error) {
    res.status(500).json({
      message: "Error registering case",
      error: error.message
    });
  }
};

module.exports = registerCase;