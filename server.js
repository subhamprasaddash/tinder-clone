import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import db from './dbUsers.js';

//App config 

const app = express();
var __dirname = path.resolve();

//Middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


//database config 

mongoose.connect('mongodb+srv://admin:CQtq7r5fEIuStn6x@cluster0.agf44.mongodb.net/tinder-clone-db?retryWrites=true&w=majority',{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true})
        .then(()=> console.log('Database connected'))
        .catch((err) => console.log(err))

//API endpoints

app.get('/', (req, res) => {
    res.status(200).json('API working');
})

app.post('/users', (req, res) => {
  const user = req.body;

  db.create( user , (err, data) =>{
    if(err){
      res.status(500).json(err)
    }else{
      res.status(201).json(data)
      console.log(data)
    }

  })
});

app.get('/users', (req,res) => {
    db.find((err, data) =>{
    if(err){
      res.status(500).json(err)
    }else{
      res.status(200).json(data)
    }

  })
});

/* app.delete('/users', (req,res) => {
  users.remove((err, data) => {
      if(err){
      res.status(500).json(err)
    }else{
      res.status(200).json(data)
    }
  })
}) */

//app.listen

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
  console.log(`PORT is set to ${port}`)
}
app.listen(port);