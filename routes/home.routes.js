const express = require('express')
let router = express.Router()

const homeController = require('../controllers/home.controller')

router.route('/')
    .get(homeController.get)

module.exports = router