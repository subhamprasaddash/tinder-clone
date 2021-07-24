import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

//App config 

const app = express();
var __dirname = path.resolve();

// Middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//database config

mongoose.connect('mongodb+srv://admin:CQtq7r5fEIuStn6x@cluster0.agf44.mongodb.net/tinder-clone-db?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

//API endpoints
app.get('/', (req, res) => {
    res.status(200).json('Connection successful');
})
//app.listen

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
  console.log(`PORT is set to ${port}`)
}
app.listen(port);