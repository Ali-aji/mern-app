const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a goal description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
