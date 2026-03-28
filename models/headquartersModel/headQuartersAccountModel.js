const mongoose = require("mongoose");

// Define schema
const headquartersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    },
    role: {
      type: String,
      default: "headquarters"
    }
  },
  {
    timestamps: true
  }
);

// Export model
module.exports = mongoose.model("Headquarters", headquartersSchema);