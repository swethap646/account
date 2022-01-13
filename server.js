const express = require("express")
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const userroute = require('./routes/userroute');



app.use('/api/user' , userroute);
app.get('/' ,function(req, res){
    res.send("backend server");
})

app.listen(5000, ()=>{
    console.log(`Nodejs server is started`);
})