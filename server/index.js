const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const connectDB = require("./config/db");
const { getBoards, createBoard, getBoardById } = require("./controllers/boardController");
const { createColumn } = require("./controllers/colunmController");
const { createTask } = require("./controllers/taskController");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

connectDB();

const typeDefs = gql`
  type Board {
    id: ID!
    name: String!
    columns: [ColumnItem]
  }

  type ColumnItem {
    id: ID!
    name: String!
    tasks: [Task]
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: String
    subtasks: [SubTask]
  }

  type SubTask {
    title: String!
    isCompleted: Boolean
  }

  type Query {
    boards: [Board]
    board(id: ID!): Board
  }

  type Mutation {
    createBoard(name: String!): Board
    updateBoard(id: ID!, name: String!): Board
    deleteBoard(id: ID!): Boolean
    createColumn(boardId: ID!, name: String!): ColumnItem
    updateColumn(boardId: ID!, id: ID!, name: String!): ColumnItem
    deleteColumn(boardId: ID!, id: ID!): Boolean
    createTask(
      columnId: ID!
      title: String!
      description: String
      status: String
      subtasks: [SubTaskInput]
    ): Task
    updateTask(
      columnId: ID!
      id: ID!
      title: String
      description: String
      status: String
      subtasks: [SubTaskInput]
    ): Task
    deleteTask(columnId: ID!, id: ID!): Boolean
  }

  input SubTaskInput {
    title: String!
    isCompleted: Boolean
  }
`;

const resolvers = {
  Query: {
    boards: () => getBoards(),
    board: (_, { id }) => getBoardById(id), 
  },
  Mutation: {
    createBoard: (_, { name }) => createBoard(name),
    updateBoard: (_, { id, name }) => updateBoard(id, name),
    deleteBoard: (_, { id }) => deleteBoard(id),
    createColumn: (_, { boardId, name }) => createColumn(boardId, name),
    updateColumn: (_, { boardId, id, name }) => updateColumn(boardId, id, name),
    deleteColumn: (_, { boardId, id }) => deleteColumn(boardId, id),
    createTask: (_, { columnId, title, description, status, subtasks }) =>
      createTask(columnId, title, description, status, subtasks),
    updateTask: (_, { columnId, id, title, description, status, subtasks }) =>
      updateTask(columnId, id, title, description, status, subtasks),
    deleteTask: (_, { columnId, id }) => deleteTask(columnId, id),
  },
};

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: 4000 }, () =>
    console.log(
      `Server running at http://localhost:4000${apolloServer.graphqlPath}`
    )
  );
}

startServer();
