const Case = require("../../models/policeOfficerModel/caseModel");

const updateCase = async (req, res) => {
  try {

    const { id } = req.params;
    const { officerId } = req.body;

    if (!officerId) {
      return res.status(400).json({
        message: "officerId is required"
      });
    }

    const updatedCase = await Case.findOneAndUpdate(
      {
        _id: id,
        officer: officerId
      },
      req.body,
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({
        message: "Case not found or not assigned to this officer"
      });
    }

    res.status(200).json({
      message: "Case updated successfully",
      case: updatedCase
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating case",
      error: error.message
    });
  }
};

module.exports = updateCase;