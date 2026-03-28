const Case = require("../../models/policeOfficerModel/caseModel");

const assignDuty = async (req, res) => {
  try {
    const { caseId, officerId, stationId } = req.body;

    if (!caseId || !officerId || !stationId) {
      return res.status(400).json({
        message: "caseId, officerId, and stationId are required"
      });
    }

    const updatedCase = await Case.findOneAndUpdate(
      {
        _id: caseId,
        stationId: stationId   // 👈 now from body, NOT req.user
      },
      {
        officer: officerId,
        status: "Under Investigation"
      },
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({
        message: "Case not found for this station"
      });
    }

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