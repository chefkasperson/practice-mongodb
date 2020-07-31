const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true})

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as far as fruits go"
})

// fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema)
const person = new Person({
    name: "John",
    age: 37
})

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
})
const orange = new Fruit({
    name: "Orange",
    score: 8,
    review: "I like mine a little sour"
})
const banana = new Fruit({
    name: "Banana",
    score: 7,
    review: "Comes prepacked"
})

// person.save()
// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully saved!")
//     }
// })

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err)
    } else {
        // console.log(fruits)
        mongoose.connection.close()
        fruits.forEach(function(fruit) {
            console.log(fruit.name)
        })
    }
})