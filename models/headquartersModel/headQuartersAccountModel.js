const Headquarters = require("../../models/headquartersModel/headquartersAccountModel");

// Create headquarters accounts
const createAccount = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields are required" });

    const newAccount = new Headquarters({ name, email, password });
    await newAccount.save();

    res.status(201).json({ message: "Account created successfully", account: newAccount });
  } catch (error) {
    res.status(500).json({ message: "Error creating account", error: error.message });
  }
};

// Update HQ Account
const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAccount = await Headquarters.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAccount) return res.status(404).json({ message: "Account not found" });
    res.status(200).json({ message: "Account updated successfully", account: updatedAccount });
  } catch (error) {
    res.status(500).json({ message: "Error updating account", error: error.message });
  }
};

// Delete HQ Account
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccount = await Headquarters.findByIdAndDelete(id);
    if (!deletedAccount) return res.status(404).json({ message: "Account not found" });
    res.status(200).json({ message: "Account deleted successfully", account: deletedAccount });
  } catch (error) {
    res.status(500).json({ message: "Error deleting account", error: error.message });
  }
};

module.exports = { createAccount, updateAccount, deleteAccount };