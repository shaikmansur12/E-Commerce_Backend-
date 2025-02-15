// let express = require('express')

// let mongodb = require('mongodb')

// let url = require('../url')

// let mcl = mongodb.MongoClient

// let router = express.Router()

// router.get("/",(req,res)=>{
//     mcl.connect(url,(err,conn)=>{
//         if(err){
//             console.log('Error in connection')
//         }else{
//             let db = conn.db('nodedb')
//             db.collection('products').find().toArray((err,array)=>{
//                 if(err){
//                     console.log('Error:- ',err)
//                 }else{
//                     console.log('Data Sent')
//                     res.json(array)
//                     conn.close()
//                 }
//             })
//         }
//     })
// })

// module.exports = router

// const express = require('express');
// const { MongoClient } = require('mongodb');
// const url = require('../url');

// const router = express.Router();

// router.get('/', async (req, res) => {
//     try {
//         const client = new MongoClient(url);
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         const db = client.db('nodedb');
//         const products = await db.collection('products').find().toArray();

//         res.json(products);
//         client.close();
//     } catch (err) {
//         console.error("❌ Error:", err);
//         res.status(500).json({ error: "Database connection failed" });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const products = await db.collection('products').find().toArray();
        res.json(products);
    } catch (err) {
        console.error("❌ Fetch Error:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

module.exports = router;
