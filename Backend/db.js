const mongoose = require('mongoose');

// for using env file instal dotenv
// Install dotenv: npm install dotenv


// const mongoUrl = process.env.REACT_APP_MONGO_URL;
const mongoUrl = "mongodb+srv://mdemam:Masum2002@cluster0.p2oztto.mongodb.net/iNotebook?retryWrites=true&w=majority&appName=Cluster0"
// console.log(mongoUrl);

async function ConnectToMongo() {
    await mongoose.connect(mongoUrl)
    .then(()=>console.log("Connected to Mongo Successfully"))
    .catch(err => console.log(err));
  }

module.exports = ConnectToMongo;