// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/own', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('strictQuery', false);
// const kittySchema = new mongoose.Schema({
//     name: String
//   });

// var harrykitten= new Kitten({ name: 'harryKitty' });
// console.log(harrykitty.name); // 'Silence'

// kittySchema.methods.speak = function () {
//     var greeting = this.name
//     console.log(greeting);
// }

// harrykitty.save(function (err, harrykitty) {
//     if (err) return console.error(err);
//     harrykitty.speak();
// });