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
    console.log(name);
    const board = new Board({ name });

    await board.save();
    return board;
  } catch (err) {
    console.log(err);
    throw new Error("Error creating board");
  }
};

module.exports = { getBoards, createBoard };
