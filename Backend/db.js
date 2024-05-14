const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/inotebook"

async function ConnectToMongo() {
    await mongoose.connect(mongoUrl)
    .then(()=>console.log("Connected to Mongo Successfully"))
    .catch(err => console.log(err));
  }
module.exports = ConnectToMongo;