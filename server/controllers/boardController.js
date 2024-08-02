const Board = require("../models/boardModel");

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

const getBoardById = async (id) => {
  try {
    const board = await Board.findById(id).populate("columns.tasks"); 
    if (!board) {
      throw new Error("Board not found");
    }
    return board;
  } catch (error) {
    throw new Error(`Error fetching board: ${error.message}`);
  }
};

module.exports = {
  getBoards,
  createBoard,
  getBoardById, 
};
