const mongoose=require('mongoose')
var Users=mongoose.model('User',{
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}
})
module.exports={Users}