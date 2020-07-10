const express = require('express')
const routes = require('./src/routes')

const app = express()


app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.json({'Hello': 'world'})
})


app.listen('3333')
