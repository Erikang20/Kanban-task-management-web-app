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
const updateColumn = async (columnId, name) => {
  try {
    const column = await Column.findById(columnId);
    if (!column) {
      throw new Error("Column not found");
    }

    column.name = name;
    await column.save();
    return column;
  } catch (err) {
    throw new Error("Error updating column");
  }
};
const deleteColumn = async ( columnId) => {
  try {
  
    const deletedColumn = await Column.findByIdAndDelete(columnId);
    if (!deletedColumn) {
      throw new Error("Column not found");
    }

    return true;
  } catch (err) {
    throw new Error("Error deleting column");
  }
};

module.exports = { createColumn, deleteColumn, updateColumn };
