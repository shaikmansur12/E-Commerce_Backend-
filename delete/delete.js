// let express = require('express')

// let url = require('../url')

// let mongodb = require('mongodb')

// let mcl = mongodb.MongoClient

// let router = express.Router()

// router.delete('/',(req,res)=>{
//     let obj ={
//         "p_id":req.body.p_id
//     }
//     mcl.connect(url,(err,conn)=>{
//         if(err){
//             console.log('Error in connection')
//         }else{
//             let db = conn.db('nodedb')
//             db.collection('products').deleteOne(obj,(err,result)=>{
//                 if(err){
//                     res.json({'delete':'Error '+err})
//                 }else{
//                     if(result.deletedCount!=0){
//                         console.log("Data deleted ")
//                         res.json({ 'delete': 'success' })
//                     }else{
//                         console.log('data not deleted')
//                         res.json({'delete':'record not found'})
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

router.delete('/', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db('nodedb');
        const result = await db.collection('products').deleteOne({ p_id: req.body.p_id });

        if (result.deletedCount > 0) {
            console.log('✅ Data Deleted');
            res.json({ delete: 'success' });
        } else {
            console.log("❌ Record Not Found");
            res.json({ delete: 'Record Not Found' });
        }

        client.close();
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ delete: `Error ${err}` });
    }
});

module.exports = router;
