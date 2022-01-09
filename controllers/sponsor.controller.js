/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: sponsor controller
*/

const sponsor = require('../models/sponsor.model')
mongoInstance = require('../init/db')

const {
    validationResult
} = require('express-validator')

const SponsorMessages = require('../messages/sponsor.messages')

exports.get = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    } 
    sponsor.find() 
    .exec()
    .then((sponsors)=>{
        if(!sponsors) 
            return res.status(SponsorMessages.error.e0.http).send(SponsorMessages.error.e0)
        let message = SponsorMessages.success.s2
        message.body = sponsors
        return res.status(message.http).send(message)  
    }) 
    .catch(() => {
        return res.status(SponsorMessages.error.e1.http).send(SponsorMessages.error.e1)
    })
}

exports.getone = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    sponsor.findOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((sponsor)=>{
        if(!sponsor) 
            return res.status(SponsorMessages.error.e0.http).send(SponsorMessages.error.e0)
        let message = SponsorMessages.success.s5
        message.body = sponsor
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(SponsorMessages.error.e1.http).send(SponsorMessages.error.e1)
    })
}

exports.put = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    sponsor.findOneAndUpdate({'_id': {$eq: req.params.id}}, {$set: req.body}, {new:true})
    .exec()
    .then((sponsor)=>{
        if(!sponsor) 
            return res.status(SponsorMessages.error.e0.http).send(SponsorMessages.error.e0)
        let message = SponsorMessages.success.s1
        message.body = sponsor
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(SponsorMessages.error.e1.http).send(SponsorMessages.error.e1)
    })
}

exports.delete = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    sponsor.deleteOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((result) => {
        if(result.deletedCount <= 0)
            return res.status(SponsorMessages.error.e0.http).send(SponsorMessages.error.e0)
        let message = SponsorMessages.success.s3
        return res.status(message.http).send(message) 
    })
    .catch(()=>{
        return res.status(SponsorMessages.error.e1.http).send(SponsorMessages.error.e1)
    })
}

exports.create = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    const newSponsor = new sponsor({
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        bdate: req.body.bdate,
        email: req.body.email,
        fotofile: req.body.fotofile,
        animals: req.body.animals
     })
    newSponsor.save()
    .then((sponsor) => {
        let message = SponsorMessages.success.s0
        message.body = sponsor
        return res.status(message.http).send(message)
    })
    .catch(() => {
        return res.status(SponsorMessages.error.e1.http).send(SponsorMessages.error.e1)
    })
}