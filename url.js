//url.js file is used to store url of mongodb
/*
module.exports = `mongodb://localhost:27017`    error in connection*/
// module.exports = `mongodb://127.0.0.1:27017/nodedb`; // use this for local host


// module.exports = "mongodb+srv://admin:admin@cluster1.szjmtev.mongodb.net/" //error

require('dotenv').config(); // Load .env variables

module.exports = process.env.MONGO_URI;
