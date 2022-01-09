/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: expert route endpoint definition
*/

const express = require('express')
let router = express.Router()

const expertController = require('../controllers/expert.controller')

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
        body('families.*._id').isString(),
        body('families.*.name').isString()], expertController.create)
    .get(expertController.get)

router.route('/:id')
    .get([param('id').isMongoId()], expertController.getone)
    .put([param('id').isMongoId()], expertController.put) 
    .delete([param('id').isMongoId()], expertController.delete) 

module.exports = router
    