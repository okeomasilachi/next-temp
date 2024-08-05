// lib/mongodb.ts

import { MongoClient } from "mongodb";

/**
 * The MongoDB URI.
 */
const uri = process.env.MONGODB_URI;

/**
 * The MongoDB connection options.
 */
const options = {};

/**
 * The MongoDB client instance.
 */
let client: MongoClient | undefined;

/**
 * The promise that resolves to the MongoDB client instance.
 */
let clientPromise: Promise<MongoClient>;

// Ensure MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

// Declare global type for TypeScript
declare global {
    namespace NodeJS {
        interface Global {
            _mongoClientPromise?: Promise<MongoClient>;
        }
    }
}

// Type assertion for globalThis to avoid TS7017 error
const globalWithMongoPromise = global as NodeJS.Global & {
    _mongoClientPromise?: Promise<MongoClient>;
};

if (process.env.NODE_ENV === "development") {
    if (!globalWithMongoPromise._mongoClientPromise) {
        client = new MongoClient(uri!, options); // Note: Use `!` to assert that uri is defined
        globalWithMongoPromise._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongoPromise._mongoClientPromise!;
} else {
    client = new MongoClient(uri!, options); // Note: Use `!` to assert that uri is defined
    clientPromise = client.connect();
}

export default clientPromise;