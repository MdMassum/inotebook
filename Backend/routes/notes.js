const express = require('express')
const Notes = require('../models/Notes')
const router = express.Router()
const fetchUser = require('../middleware/fetchUsers'); 
const { body,validationResult } = require('express-validator'); 

//ROUTE 1 : Get All Notes of Logged In User Using :GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes',fetchUser,async (req,res)=>{

    const notes = await Notes.find({user:req.user.id})
    res.send(notes);
})

//ROUTE 2 : Create Note of Logged In User Using :POST "/api/notes/addnote". Login required
router.post('/addnote',
[
    body('title','Title cannot be empty').notEmpty(),
    body('description','description cannot be empty').notEmpty(),
],fetchUser,async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){   //  error found then  return bad request and errors
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const notes = await Notes.create({
            user:req.user.id,
            title:req.body.title,
            description:req.body.description,
            tag:req.body.tag,
        })
        res.send(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
//ROUTE 3 : Update Note of Logged In User Using :PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id',fetchUser,async (req,res)=>{

    try {
        const {title,description,tag} = req.body;

        // creating a new note object
        const newNote = {};
            if(title){newNote.title = title};
            if(description){newNote.description = description};
            if(tag){newNote.tag = tag};

        // find the note to be updated and update it
        let note = await Notes.findById(req.params.id);  // req.params.id returns id from passed url
    
        if(!note){
            res.status(404).send("Not Found!!");
        }
        if(note.user.toString() !== req.user.id){
            res.status(401).json({Denied : "Action Not Allowed"})
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.send(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//ROUTE 4 : Delete a note of user :DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id',fetchUser,async (req,res)=>{
    try {

        // finding the note for deletion and deleting it
        let note = await Notes.findById(req.params.id);
        if(!note){  // if note not found
            res.status(404).send("Not Found!!");
        }
        // checking the authenticator
        if(note.user.toString() !== req.user.id){
            res.status(401).json({Denied : "Action Not Allowed"})
        }
        
        await Notes.findByIdAndDelete(note.id);
        res.send({message : "Note Deleted Successfully"});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router;