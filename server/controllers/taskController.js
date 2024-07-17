const Task = require("../models/taskModel");
const Column = require("../models/colunmModel");

const createTask = async (columnId, title, description, status, subtasks) => {
  try {
    const task = new Task({ title, description, status, subtasks });
    await task.save();
    const column = await Column.findById(columnId);
    column.tasks.push(task);
    await column.save();
    return task;
  } catch (err) {
    throw new Error("Error creating task");
  }
};

module.exports = { createTask };
