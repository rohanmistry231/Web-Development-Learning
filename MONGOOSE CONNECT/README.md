# Mongoose

This section covers Mongoose, an ODM for MongoDB.

## Topics Covered
- Introduction to Mongoose
- Schemas and models
- Querying the database
- Validation and middleware

## Resources
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)

## Code Examples

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sample_db', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'John', age: 30, city: 'New York' });
user.save().then(() => console.log('User saved'));
