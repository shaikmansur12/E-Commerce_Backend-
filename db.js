require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL; // Fetch from env
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db('nodedb');
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
}

module.exports = connectDB;
