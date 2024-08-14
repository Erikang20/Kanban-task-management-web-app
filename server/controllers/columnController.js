const Column = require("../models/columnModel");
const Board = require("../models/boardModel");

const createColumn = async (boardId, name) => {
  try {
    const column = new Column({ name });
    await column.save();
    const board = await Board.findById(boardId);
    board.columns.push(column);
    await board.save();
    return column;
  } catch (err) {
    throw new Error("Error creating column");
  }
};

module.exports = { createColumn };
