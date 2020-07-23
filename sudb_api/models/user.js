const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  read: [String],
  toread: [String],
  genres: [String],
});

module.exports = mongoose.model("User", userSchema);
