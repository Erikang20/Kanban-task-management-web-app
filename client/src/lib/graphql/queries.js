import { gql } from "@apollo/client";

export const GET_BOARDS = gql`
	query GetBoards {
		boards {
			id
			name
			columns {
				id
				name
				tasks {
					id
					title
					description
					status
					subtasks {
						title
						isCompleted
					}
				}
			}
		}
	}
`;

export const GET_BOARD_BY_ID = gql`
	query GetBoardById($id: ID!) {
		board(id: $id) {
			id
			name
			columns {
				id
				name
				tasks {
					id
					title
					description
					status
					subtasks {
						title
						isCompleted
					}
				}
			}
		}
	}
`;

export const GET_COLUMN_BY_ID = gql`
	query GetColumnById($boardId: ID!, $columnId: ID!) {
		column(boardId: $boardId, columnId: $columnId) {
			id
			name
			tasks {
				id
				title
				description
				status
				subtasks {
					title
					isCompleted
				}
			}
		}
	}
`;

export const GET_TASK_BY_ID = gql`
	query GetTaskById($columnId: ID!, $taskId: ID!) {
		task(columnId: $columnId, taskId: $taskId) {
			id
			title
			description
			status
			subtasks {
				title
				isCompleted
			}
		}
	}
`;
export const CREATE_BOARD = gql`
	mutation CreateBoard($name: String!) {
		createBoard(name: $name) {
			id
			name
		}
	}
`;

export const UPDATE_BOARD = gql`
	mutation UpdateBoard($id: ID!, $name: String!) {
		updateBoard(id: $id, name: $name) {
			id
			name
		}
	}
`;

export const DELETE_BOARD = gql`
	mutation DeleteBoard($id: ID!) {
		deleteBoard(id: $id)
	}
`;

export const CREATE_COLUMN = gql`
	mutation CreateColumn($boardId: ID!, $name: String!) {
		createColumn(boardId: $boardId, name: $name) {
			id
			name
		}
	}
`;

export const UPDATE_COLUMN = gql`
	mutation UpdateColumn($boardId: ID!, $id: ID!, $name: String!) {
		updateColumn(boardId: $boardId, id: $id, name: $name) {
			id
			name
		}
	}
`;

export const DELETE_COLUMN = gql`
	mutation DeleteColumn($boardId: ID!, $id: ID!) {
		deleteColumn(boardId: $boardId, id: $id)
	}
`;

export const CREATE_TASK = gql`
	mutation CreateTask(
		$columnId: ID!
		$title: String!
		$description: String
		$status: String
		$subtasks: [SubTaskInput]
	) {
		createTask(
			columnId: $columnId
			title: $title
			description: $description
			status: $status
			subtasks: $subtasks
		) {
			id
			title
			description
			status
		}
	}
`;

export const UPDATE_TASK = gql`
	mutation UpdateTask(
		$columnId: ID!
		$id: ID!
		$title: String
		$description: String
		$status: String
		$subtasks: [SubTaskInput]
	) {
		updateTask(
			columnId: $columnId
			id: $id
			title: $title
			description: $description
			status: $status
			subtasks: $subtasks
		) {
			id
			title
			description
			status
		}
	}
`;

export const DELETE_TASK = gql`
	mutation DeleteTask($columnId: ID!, $id: ID!) {
		deleteTask(columnId: $columnId, id: $id)
	}
`;
