/* eslint-disable no-console */
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 5000,
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    return client;
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
    throw error;
  }
}

export async function closeConnection() {
  try {
    await client.close();
    console.log("MongoDB client closed.");
  } catch (closeError) {
    console.error(
      "An error occurred while closing the MongoDB client:",
      closeError
    );
  }
}
