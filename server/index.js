const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const connectDB = require("./config/db");
const { getBoards, createBoard } = require("./controllers/boardController");
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
  }

  type Mutation {
    createBoard(name: String!): Board
    createColumn(boardId: ID!, name: String!): ColumnItem
    createTask(
      columnId: ID!
      title: String!
      description: String
      status: String
      subtasks: [SubTaskInput]
    ): Task
  }

  input SubTaskInput {
    title: String!
    isCompleted: Boolean
  }
`;

const resolvers = {
  Query: {
    boards: () => getBoards(),
  },
  Mutation: {
    createBoard: (_, { name }) => createBoard(name),
    createColumn: (_, { boardId, name }) => createColumn(boardId, name),
    createTask: (_, { columnId, title, description, status, subtasks }) =>
      createTask(columnId, title, description, status, subtasks),
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
