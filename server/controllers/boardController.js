const Board = require("../models/boardModel");
const ColumnItem = require("../models/columnModel");
const Task = require("../models/taskModel");
const SubTask = require("../models/subTaskModel");
const getBoards = async () => {
  try {
    return await Board.find().populate({
      path: "columns",
      populate: {
        path: "tasks",
      },
    });
  } catch (err) {
    throw new Error("Error fetching boards");
  }
};

const createBoard = async (name) => {
  try {
    const board = new Board({ name });

    await board.save();
    return board;
  } catch (err) {
    console.log(err);
    throw new Error("Error creating board");
  }
};
const updateBoard = async (id, newName) => {
  try {
    const board = await Board.findById(id);

    if (!board) {
      throw new Error("Board not found");
    }

    board.name = newName;

    await board.save();

    return board;
  } catch (err) {
    console.log(err);
    throw new Error("Error updating board name");
  }
};

const getBoardById = async (id) => {
  try {
    const board = await Board.findById(id).populate({
      path: "columns",
      populate: {
        path: "tasks",
      },
    });
    if (!board) {
      throw new Error("Board not found");
    }
    return board;
  } catch (error) {
    throw new Error(`Error fetching board: ${error.message}`);
  }
};

const deleteBoard = async (id) => {
  try {
    const board = await Board.findById(id);

    if (!board) {
      throw new Error("Board not found");
    }

    await Promise.all(
      board.columns.map(async (columnId) => {
        const column = await ColumnItem.findById(columnId).populate("tasks");

        if (column && column.tasks) {
          await Promise.all(
            column.tasks.map(async (taskId) => {
              const task = await Task.findById(taskId).populate("subtasks");

              if (task && task.subtasks) {
                await SubTask.deleteMany({ _id: { $in: task.subtasks } });
              }

              await Task.findByIdAndDelete(taskId);
            })
          );
        }

        await ColumnItem.findByIdAndDelete(columnId);
      })
    );

    await Board.findByIdAndDelete(id);

    return true;
  } catch (error) {
    throw new Error(`Error deleting board: ${error.message}`);
  }
};
module.exports = {
  getBoards,
  createBoard,
  getBoardById,
  deleteBoard,
  updateBoard,
};
