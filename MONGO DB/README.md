# MongoDB

This section covers MongoDB.

## Topics Covered
- Introduction to MongoDB
- CRUD operations
- Indexing and aggregation
- Data modeling

## Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Code Examples

```javascript
const { MongoClient } = require('mongodb');
const uri = "your_mongodb_uri";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('sample_db');
        const collection = database.collection('sample_collection');
        
        const doc = { name: "John", age: 30, city: "New York" };
        const result = await collection.insertOne(doc);
        console.log(`New document inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
