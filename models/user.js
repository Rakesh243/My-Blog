const mongoose = require("mongoose");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an E-mail."],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid E-mail."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: [6, "Minimun password length is 6 characters."],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
