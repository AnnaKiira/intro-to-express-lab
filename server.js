const express = require('express')
const app = express()
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


/* 1. Be Polite, Greet the User */

app.get('/greet/:name', (req, res) => {
    return res.send(`Hello there, ${req.params.name}!`)
})

/* 2. Rolling the Dice */

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)
    if (isNaN(number)) {
        return res.send('You must specify a number')
    } else {
        const randomNumber = Math.floor(Math.random() * (number + 1))
        return res.send(`You rolled a ${randomNumber}`)
    }
})

/* 3. I Want THAT One! */

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index)
    if (index >= collectibles.length) {
        return res.send('This item is not yet in stock. Check back soon!')
    } else if (index < collectibles.length)
        return res.send(`So you want the ${collectibles[index].name}? For ${collectibles[index].price} it can be yours!`)
})

/* 4. Filter Shoes by Query Parameters */

app.get('/shoes', (req, res) => {
    return res.send(shoes.filter(({price}) => price > req.query.minprice))
})

app.get('/shoes', (req, res) => {
    return res.send(shoes.filter(({price}) => price < req.query.maxprice))
})

app.get('/shoes', (req, res) => {
    return res.send(shoes.filter(({type}) => type === req.query.type))
})

app.get('/shoes', (req, res) => {
    return res.send(shoes)
})

app.listen(3500, () => {
    console.log('Express server has started on port 3500')
})