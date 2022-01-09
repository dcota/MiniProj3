/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: expert model definition
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expertSchema = new Schema({
    name: String,
    type: String,
    location: {
        street: String,
        local: String,
        city: String,
        cp: String
    },
    bdate: String,
    email: String,
    fotofile: String,
    families: [{
        _id: Number,
        name: String
    }]
})

module.exports = mongoose.model('expert',expertSchema);