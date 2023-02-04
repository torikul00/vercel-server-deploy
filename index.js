const express = require('express')
const env = require('dotenv')

const app = express()

env.config()


app.get('/', (req, res) => {
    res.send({
        name: 'torikul islam',
        age: 30
    })
})

app.listen(process.env.PORT)
