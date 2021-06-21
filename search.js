const express = require('express');
const mongoose = require('mongoose');
const User=require('./user');
const dbUri='mongodb+srv://rishika0109:<password>@rishika.hvqia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
console.log('connected to db');
})
.catch((err)=>{
console.log(err);
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.listen(3000);
app.get('/search',async (req,res)=>{
    const search= req.query.title;
    const ris=await User.find({title:{$regex:`${search}`}});
    res.json(ris);
    
        
        });