const express = require('express');
const Router = require('./ProductRouter/Router');
const connectDB =  require('./CommonDB');
const cors = require('cors');

const server  = express();
server.use(cors())
server.use(express.json());
server.use("/users", Router.router);


server.listen(8000,()=>{
    console.log("server is started sucessfully");
})

const start = async()=>{
    try{
        await connectDB('mongodb+srv://anilktr:Anil123@clusterproject1.nm6v4yn.mongodb.net/Mongodbproject1');
        console.log("database is connected sucessfully");
    }catch(err){
        console.log(err);
    }
}

start();