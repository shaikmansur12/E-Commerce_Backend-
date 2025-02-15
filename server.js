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

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8080;

// Import routes
const fetch = require('./fetch/fetch');
const insert = require('./insert/insert');
const update = require('./update/update');
const remove = require('./delete/delete');

// Use routes
app.use('/fetch', fetch);
app.use('/insert', insert);
app.use('/update', update);
app.use('/delete', remove);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error("Error in port connection:", err);
    } else {
        console.log(`🚀 Server listening on port ${port}`);
    }
});
