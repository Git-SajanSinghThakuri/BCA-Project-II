const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false
    },
    lastname: {
      type: String,
      required: true,
      unique: false
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
      required: true,
      unique: true
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