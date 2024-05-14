const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }

  });
  module.exports = mongoose.model('notes',notesSchema);