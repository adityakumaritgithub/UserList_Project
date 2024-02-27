const mongoose = require('mongoose');
const Model = require('../Model/user');
const asyncWrapper = require('../middleware/async')

const User = Model.user;


exports.createProduct = asyncWrapper(async(req,res)=>{
    const userdata = new User(req.body);
    const prod = await userdata.save();
    res.json(prod);

})

exports.getAllproduct = asyncWrapper(async(req,res)=>{
    const userdata = await User.find();
    res.json(userdata);

})

exports.getproduct = asyncWrapper(async(req,res)=>{
    const id = req.params.id;
    const userdata = await User.findById(id);
    res.json(userdata);

})

exports.putproduct = asyncWrapper(async(req,res)=>{
    const id = req.params.id;

    try{
        const userdata = await User.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(201).json(userdata);
    }catch(err){
        console.log(err);
      res.status(400).json(err);
    }

})

exports.patchproduct = asyncWrapper(async(req,res)=>{
    const id = req.params.id;
    try{
    const doc = await User.findOneAndUpdate({_id:id},req.body, {new:true})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }

})

exports.deleteproduct = asyncWrapper(async(req,res)=>{
    const id = req.params.id;
    try{
    const doc = await User.findOneAndDelete({_id:id})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }

})
