const Headquarters = require("../../models/headquartersModel/headquartersAccountModel");

// CREATE ACCOUNT
const createAccount = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newAccount = new Headquarters({
      name,
      email,
      password
    });

    await newAccount.save();

    res.status(201).json({
      message: "Headquarters account created successfully",
      account: newAccount
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating account",
      error: error.message
    });
  }
};

// UPDATE ACCOUNT
const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedAccount = await Headquarters.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedAccount) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({
      message: "Account updated successfully",
      account: updatedAccount
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating account",
      error: error.message
    });
  }
};

// DELETE ACCOUNT
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAccount = await Headquarters.findByIdAndDelete(id);

    if (!deletedAccount) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({
      message: "Account deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting account",
      error: error.message
    });
  }
};

module.exports = {
  createAccount,
  updateAccount,
  deleteAccount
};