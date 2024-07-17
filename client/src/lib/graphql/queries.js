
import { gql } from "@apollo/client";

export const GET_BOARDS = gql`
	query GetBoards {
		boards {
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

export const CREATE_BOARD = gql`
	mutation CreateBoard($name: String!) {
		createBoard(name: $name) {
			id
			name
		}
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
