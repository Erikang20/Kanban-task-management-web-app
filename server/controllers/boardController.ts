import Board from "../models/boardModel";
import { Types } from "mongoose";

export const getBoards = async () => {
	try {
		return await Board.find()
			.populate({
				path: "columns",
				populate: {
					path: "tasks",
				},
			})
			.exec();
	} catch (err) {
		throw new Error("Error fetching boards");
	}
};

export const createBoard = async (name: string) => {
	try {
		const board = new Board({ name });
		await board.save();
		return board;
	} catch (err) {
		console.log(err);
		throw new Error("Error creating board");
	}
};

export const getBoardById = async (id: string | Types.ObjectId) => {
	try {
		const board = await Board.findById(id).populate("columns.tasks").exec();
		if (!board) {
			throw new Error("Board not found");
		}
		return board;
	} catch (error) {
		throw new Error(`Error fetching board: ${(error as Error).message}`);
	}
};
