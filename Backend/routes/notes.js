const express = require('express')
const Notes = require('../models/Notes')
const router = express.Router()

router.post('/',(req,res)=>{
    
    // const n1 = {
    //     title:"my book",
    //     description:"this is my first book written by unknown ok byee tata"
    // }
    const notes = Notes(req.body);
    notes.save();
    res.send(req.body);
    // res.json([]);
})
module.exports = router;