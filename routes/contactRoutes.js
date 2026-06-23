const express=require("express");

const router=express.Router();

const Submission=
require("../models/Submission");

router.post("/",async(req,res)=>{

const submission=
await Submission.create(req.body);

res.json(submission);

});

router.get("/",async(req,res)=>{

const data=
await Submission.find();

res.json(data);

});

module.exports=router;
