/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: API main file
*/

const express = require('express')
const app = express()

app.use('/assets', express.static('assets'))
app.use('/views', express.static('views'))

require('./init/middleware')(app)
require('./init/router')(app)

const port = process.env.PORT || 8081
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, (error) => {
    if (error) 
        throw error
    else 
        console.log(`App listening on port ${port} `)
})