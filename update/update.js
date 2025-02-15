// let express = require('express')

// let mongodb = require('mongodb')

// let url = require('../url')

// let mcl = mongodb.MongoClient

// let router = express.Router()

// router.put('/',(req,res)=>{
//     let p_id = req.body.p_id
//     let obj = {
//         p_name: req.body.p_name,
//         p_cost: req.body.p_cost
//     }
//     mcl.connect(url,(err,conn)=>{
//         if(err){
//             console.log('Error in connection')
//         }else{
//             let db = conn.db('nodedb')
//             db.collection('products').updateOne({p_id},{$set:obj},(err,result)=>{
//                 if(err){
//                     res.json({'update':'Error '+err})
//                 }else{
//                     if(result.matchedCount!=0){
//                         console.log('Data Updated')
//                         res.json({'update':'success'})
//                     }else{
//                         console.log("Data Not updated ")
//                         res.json({ 'update': 'Record Not found' })  
//                     }
//                     conn.close()
//                 }
//             })
//         }
//     })
// })

// module.exports = router


const express = require('express');
const { MongoClient } = require('mongodb');
const url = require('../url');

const router = express.Router();

router.put('/', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db('nodedb');
        const result = await db.collection('products').updateOne(
            { p_id: req.body.p_id }, 
            { $set: { p_name: req.body.p_name, p_cost: req.body.p_cost } }
        );

        if (result.matchedCount > 0) {
            console.log('✅ Data Updated');
            res.json({ update: 'success' });
        } else {
            console.log("❌ Record Not Found");
            res.json({ update: 'Record Not Found' });
        }

        client.close();
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ update: `Error ${err}` });
    }
});

module.exports = router;
