// let express = require('express')

// let mongodb = require('mongodb')

// let router  = express.Router()

// let url = require('../url')

// let mcl = mongodb.MongoClient

// router.post('/',(req,res)=>{
//     let obj = req.body
//     mcl.connect(url,(err,conn)=>{
//         if(err){
//             console.log('Error in connection')
//         }else{
//             let db = conn.db('nodedb')
//             db.collection('products').insertOne(obj,(err)=>{
//                 if(err){
//                     res.json({'insert':'Error '+err})
//                 }else{
//                     console.log('Data Inserted')
//                     res.json({'insert':'success'})
//                     conn.close()
//                 }
//             })
//         }
//     })
// })


// module.exports = router

const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.post('/', async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection('products').insertOne(req.body);
        console.log("✅ Data Inserted:", result);
        res.json({ insert: "success", insertedId: result.insertedId });
    } catch (err) {
        console.error("❌ Insert Error:", err);
        res.status(500).json({ insert: "Error inserting data" });
    }
});

module.exports = router;
