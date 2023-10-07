const express= require('express')
const bodyParser= require('body-parser')
const cors=require('cors')

var userController=require('./controllers/userController')
const {mongoose}= require('./db.js')
var app=express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))

app.listen(3000,function(){
    console.log("Server started at port 3000")
})
app.use('/users',userController)
