const Case = require("../../models/policeOfficerModel/caseModel");

const updateCase = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedCase = await Case.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({
        message: "Case not found"
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