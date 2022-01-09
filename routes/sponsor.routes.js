/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: sponsor route endpoint definition
*/

const express = require('express')
let router = express.Router()

const sponsorController = require('../controllers/sponsor.controller')

const {
    body,
    param
} = require('express-validator')

router.route('/')
    .post([body('name').isString(),
        body('type').isString(),
        body('location.street').isString(),
        body('location.local').isString(),
        body('location.city').isString(),
        body('location.cp').isString(),
        body('bdate').isString(),
        body('email').isString(),
        body('fotofile').isString(),
        body('animals.*._id').isString(),
        body('animals.*.name').isString()], sponsorController.create)
    .get(sponsorController.get)

router.route('/:id')
    .get([param('id').isMongoId()], sponsorController.getone)
    .put([param('id').isMongoId()], sponsorController.put) 
    .delete([param('id').isMongoId()], sponsorController.delete) 

module.exports = router
    