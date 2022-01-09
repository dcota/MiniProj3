/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: expert controller
*/

const expert = require('../models/expert.model')
mongoInstance = require('../init/db')

const {
    validationResult
} = require('express-validator')

const expertMessages = require('../messages/expert.messages')

exports.get = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    } 
    expert.find() 
    .exec()
    .then((experts)=>{
        if(!experts) 
            return res.status(expertMessages.error.e0.http).send(expertMessages.error.e0)
        let message = expertMessages.success.s2
        message.body = experts
        return res.status(message.http).send(message)  
    }) 
    .catch(() => {
        return res.status(expertMessages.error.e1.http).send(expertMessages.error.e1)
    })
}

exports.getone = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    expert.findOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((expert)=>{
        if(!expert) 
            return res.status(expertMessages.error.e0.http).send(expertMessages.error.e0)
        let message = expertMessages.success.s5
        message.body = expert
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(expertMessages.error.e1.http).send(expertMessages.error.e1)
    })
}

exports.put = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    expert.findOneAndUpdate({'_id': {$eq: req.params.id}}, {$set: req.body}, {new:true})
    .exec()
    .then((expert)=>{
        if(!expert) 
            return res.status(expertMessages.error.e0.http).send(expertMessages.error.e0)
        let message = expertMessages.success.s1
        message.body = expert
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(expertMessages.error.e1.http).send(expertMessages.error.e1)
    })
}

exports.delete = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    expert.deleteOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((result) => {
        if(result.deletedCount <= 0)
            return res.status(expertMessages.error.e0.http).send(expertMessages.error.e0)
        let message = expertMessages.success.s3
        return res.status(message.http).send(message) 
    })
    .catch(()=>{
        return res.status(expertMessages.error.e1.http).send(expertMessages.error.e1)
    })
}

exports.create = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    const newexpert = new expert({
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        bdate: req.body.bdate,
        email: req.body.email,
        fotofile: req.body.fotofile,
        families: req.body.families
     })
    newexpert.save()
    .then((expert) => {
        let message = expertMessages.success.s0
        message.body = expert
        return res.status(message.http).send(message)
    })
    .catch(() => {
        return res.status(expertMessages.error.e1.http).send(expertMessages.error.e1)
    })
}