const express = require('express')
const { default: mongoose } = require('mongoose')
const { add } = require('./constructor/add.Constructor')
const { listing } = require('./constructor/List.Constructor')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 3001
const app = express()

mongoose.connect(process.env.MONGODB)
    .then(_ => console.log('✅ MongoDB Connected!'))
    .catch(e => console.log('👎', e.message))

app.use(express.json())
app.use(cors({ origin: "*" }))

app.get("/list", listing)
app.get("/list/:word", listing)
app.post("/add", add)


app.use(express.static('./frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'frontend/' })
);

app.all("/**", (req, res) => {
    return res.status(404).send({ status: false, mrssage: 'Page not found!' })
})

app.listen(port, (err) => {
    if (err) return console.log('👎', err.message)
    return console.log('✅ Server Connected!')
})