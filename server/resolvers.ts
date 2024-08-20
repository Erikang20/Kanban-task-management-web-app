// import { Resolvers } from "./types";
import {
	getBoards,
	createBoard,
	getBoardById,
} from "./controllers/boardController";

export const resolvers = {
	Query: {
		boards: () => getBoards(),
		board: (_, { id }) => getBoardById(id),
	},

	Mutation: {
		createBoard: (_, { name }) => createBoard(name),
		// updateBoard: (_, { id, name }) => updateBoard(id, name),
		// deleteBoard: (_, { id }) => deleteBoard(id),
		// createColumn: (_, { boardId, name }) => createColumn(boardId, name),
		// updateColumn: (_, { boardId, id, name }) => updateColumn(boardId, id, name),
		// deleteColumn: (_, { boardId, id }) => deleteColumn(boardId, id),
		// createTask: (_, { columnId, title, description, status, subtasks }) =>
		// 	createTask(columnId, title, description, status, subtasks),
		// updateTask: (_, { columnId, id, title, description, status, subtasks }) =>
		// 	updateTask(columnId, id, title, description, status, subtasks),
		// deleteTask: (_, { columnId, id }) => deleteTask(columnId, id),
	},
};
