const logoutController = (req, res) => {

  res.status(200).json({
    message: "Logout successful"
  });

};

module.exports = logoutController;