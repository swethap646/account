const express = require("express");
const mongoose = require('mongoose');

const route = express.Router();





mongoose.connect('mongodb://localhost:27017/mernauthe',{useNewUrlParser : true, useUnifiedTopology : true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('mongodb connection successful');
    }

    
})
var Usermodel = mongoose.model('users', {name : String , username : String , password: String })
 
route.post('/registeruser', function(req, res){
      

       var newuser = new Usermodel({name : req.body.name , username : req.body.username, password:req.body.password})

       newuser.save(function(err){

           if(err){
               res.send('something went wrong')
           }else{
               res.send('user registration successful')
           }
           
       })
})

route.post('/loginuser', function(req, res){
    Usermodel.find({
        username : req.body.username,
        password:req.body.password
    }, function(err, document){


        if(err){
            res.send('something went wrong');
        }else{

             if(document.length == 0){
               res.send('login failed');
        }

      else{
            res.send('login successful');
        }
    }
})


 model.exports.route

