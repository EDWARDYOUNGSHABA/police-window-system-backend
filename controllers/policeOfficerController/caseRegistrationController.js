const Case = require("../../models/policeOfficerModel/caseModel");

const registerCase = async (req, res) => {

  try {

    const { caseTitle, description, crimeType, location } = req.body;

    const newCase = new Case({
      caseTitle,
      description,
      crimeType,
      location,
      officer: req.user._id,
      stationId: req.user.stationId
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