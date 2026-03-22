const validateRequiredFields = (fields, body) => {
  const missingFields = [];

  fields.forEach(field => {
    if (!body[field]) {
      missingFields.push(field);
    }
  });

  if (missingFields.length > 0) {
    return {
      isValid: false,
      message: `Missing fields: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
};

module.exports = {
  validateRequiredFields
};