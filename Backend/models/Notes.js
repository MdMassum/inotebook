const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    user:{                         // this will ensure each user can access only his notes, act as foreign key
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'                  // user model is reference
    },
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