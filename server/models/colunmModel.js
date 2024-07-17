const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Column name is required"],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

module.exports = mongoose.model("Column", columnSchema);
