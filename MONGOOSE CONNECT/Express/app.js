const express = require("express");
const path = require("path");
//const fs = require("fs");
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/latest', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set("strictQuery", true);
const app = express();
const port = 3000;

// Define Mongoose Schema

const GymSchema = new mongoose.Schema({
    fname: String,
    age: String,
    gender: String,
    address: String,
    more: String
  });

const Gym = mongoose.model('Gym', GymSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPACIFIC STUFF
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS

app.get('/',(req,res)=>{
    const params = { } 
    res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
    var myData = new Gym(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database");
    }).catch(()=>{
        res.status(400).send("Item not saved to the database");
    })
    // res.status(200).render('index.pug');
});

// app.post('/',(req,res)=>{
//    fname = req.body.fname
//    age = req.body.age
//    gender= req.body.gender
//    address = req.body.address
//    more = req.body.more
//    let outputToWrite = `the name of client is ${fname}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//    fs.writeFileSync('output.txt',outputToWrite);
//     console.log(req.body);
//     const params = {'message':'Your form is submitted successfully'}
//     res.status(200).render('index.pug',params);
// });


/* app.get("/demo",(req, res)=>{
    res.status(200).render('demo', { title: 'Hey Rohan', message: "Hello there and thans for telling me how to use pubg"})
});

app.get("/",(req, res)=>{
    res.status(200).send("This is Home page of my first express app with Rohan")
});

app.get("/about",(req, res)=>{
    res.send("This is About page of my first express app with Rohan")
});

app.post("/about",(req, res)=>{
    res.send("This is a post request About page of my first express app with Rohan")
});

app.post("/this",(req, res)=>{
    res.status(404).send("This page is not found in my rohans app")
}); */
// START THE SERVER

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
});