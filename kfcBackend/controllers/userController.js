const express= require('express')
var router=express.Router()
var objectId=require('mongoose').Types.ObjectId
var {Users}=require('../models/user')

router.get('/',function(req,res){
    Users.find(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in display data")
        }
    })
})

router.post('/',function(req,res){
    var emp=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    })
    emp.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in insert data")
        }
    })
})

router.get('/:id',function(req,res){
    if(!objectId.isValid(req.params.id))
    {
        res.send("No such record")
    }
    Users.findById(req.params.id,function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in display data")
        }
    })
})

router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        res.send('No record');

    var emp = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    };
    Users.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err)); }
    });
});
router.delete('/:id',function(req,res){
    if (!objectId.isValid(req.params.id))
        res.send('No record');
    Users.findByIdAndRemove(req.params.id,function(err,doc){
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err)); }
    })
})
module.exports=router