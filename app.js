const express = require('express');
//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/tests";


const app = express();

mongoose.connect(url,{useUnifiedTopology: true})
    const con = mongoose.connection
    con.on('open',()=>{
        console.log('connected...');
    })
   // if(err) throw err;
    //console.log("database created successfully");
  //  db.close();
app.use(express.json());
const alienRouter = require('./routers/aliens');
app.use('/',alienRouter);
app.listen(6000);