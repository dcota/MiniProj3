/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: sponsor model definition
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sponsorSchema = new Schema({
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
    animals: [{
        _id: Number,
        name: String
    }]
})

module.exports = mongoose.model('sponsor',sponsorSchema);