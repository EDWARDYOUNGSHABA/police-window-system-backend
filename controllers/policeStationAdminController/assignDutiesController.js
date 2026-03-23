const Case = require("../../models/policeOfficerModel/caseModel");

const assignDuty = async (req, res) => {

  try {

    const { caseId, officerId } = req.body;

    const updatedCase = await Case.findOneAndUpdate(
      {
        _id: caseId,
        stationId: req.user.stationId
      },
      {
        officer: officerId,
        status: "Under Investigation"
      },
      { new: true }
    );

    res.status(200).json({
      message: "Duty assigned successfully",
      case: updatedCase
    });

  } catch (error) {

    res.status(500).json({
      message: "Error assigning duty",
      error: error.message
    });

  }

};

module.exports = assignDuty;