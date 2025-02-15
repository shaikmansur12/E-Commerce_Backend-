const { MongoClient } = require('mongodb');
const url = require('./url');

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
        console.log("✅ Connected to MongoDB Atlas!");
    }
    return client.db('nodedb'); // Ensure the DB name matches Atlas
}

module.exports = connectDB;
