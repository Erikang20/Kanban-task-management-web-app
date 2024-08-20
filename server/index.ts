import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";
import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 4000;

// Read the schema file and parse it using gql
const typeDefs = gql(
	readFileSync(path.resolve(__dirname, "./schema.graphql"), {
		encoding: "utf-8",
	})
);

async function startApolloServer(): Promise<void> {
	const app = express();
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	const { url } = await startStandaloneServer(server, {
		// Optionally, you can add context or other options here
	});

	// console.log(`
	//   🚀  Server is running!
	//   📭  Query at ${url}
	// `);
	app.listen({ port: 4000 }, () =>
		console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
	);
}

startApolloServer();
