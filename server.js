// //server.js file is used to collaborate the modules.

// let express = require('express')

// let bodyparser = require('body-parser')

// let cors = require('cors')

// let app = express()

// app.use(bodyparser.json())

// app.use(bodyparser.urlencoded({extended:false}))


// app.use(cors())

// let port = process.env.PORT || 8080

// let fetch = require('./fetch/fetch')
// let insert =  require('./insert/insert')
// let update = require('./update/update')
// let remov = require('./delete/delete')

// app.use('/fetch',fetch)
// app.use('/insert',insert)
// app.use('/update',update)
// app.use('/delete',remov)


// app.listen(port,(err)=>{
//     if(err){
//         console.log("Error in port connection")
//     }else{
//         console.log("server listening to port no :-", port)
//     }
// })

require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
app.use('/fetch', require('./fetch/fetch'));
app.use('/insert', require('./insert/insert'));
app.use('/update', require('./update/update'));
app.use('/delete', require('./delete/delete'));

// Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
