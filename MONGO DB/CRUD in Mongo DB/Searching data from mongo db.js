// // Searching for data in mongo db
// use harryKart

// // This query will return all the objects with rating equal to 3.5
// db.items.find({rating: 3.5})
// db.items.find({rating: {$gte: 3.5}})
// db.items.find({rating: {$gt: 3.5}})
// // And operator
// db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

// db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

// db.items.find({ 
//     $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
// })

// db.items.find({rating: {$gt: 3.5}}, {rating: 1})
