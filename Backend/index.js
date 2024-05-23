const ConnectToMongo = require('./db')
const cors = require('cors')
// const bodyParser = require('body-parser')
const express = require('express')


const app = express()
const port = 5000

ConnectToMongo();
// app.use(bodyParser.json()) // use this or below express.json() to use req.body
app.use(express.json())  // we use this to use req.body for json file i.e now we can recieve and send json by req.body (see also body-parser was used earlier when express.json() was not there we can also use bodyParser.json() )
app.use(cors()); // for solving issue while connecting frontend and backend
// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})