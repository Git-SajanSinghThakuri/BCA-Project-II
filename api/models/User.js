const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    contact: {
      type: Number,
      required: true
    },
    profilepic: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);