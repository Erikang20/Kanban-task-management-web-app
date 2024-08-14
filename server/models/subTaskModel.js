const mongoose = require("mongoose");

const subTaskModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("SubTask", subTaskModel);
