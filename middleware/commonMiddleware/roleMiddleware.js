const authorize = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: 'Forbidden: Access denied'
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = authorize;