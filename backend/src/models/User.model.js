const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    newResults: { type: Array },
  },

  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
