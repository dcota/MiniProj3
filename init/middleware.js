/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: app configurations
*/

const express = require('express')

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json({ extended: false }))

    const cookieParser = require('cookie-parser')
    const cors = require('cors')
    app.use(cors({
        exposedHeaders: ['Location']
    }))

    app.use(cookieParser())
    app.set('trust proxy', 1)
}