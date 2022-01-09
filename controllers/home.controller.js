/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: home controller
*/

const fs = require('fs')
const handlebars = require('handlebars')

exports.get = (req, res) => {
    let home = fs.readFileSync(__dirname + '/../views/home.hbs', 'utf8')
    let compiled_page = handlebars.compile(home) ({
        title: 'Animalec',
        style: {
            background_color: '#2b589f',
            text_color: '#FFFFFF'
        },
        content: {
            title: 'Animalec API',
            text: 'Esta é a API do Animalec',
            logo: '../assets/img/logo.png'

        }
    })
    return res.status(200).send(compiled_page)
}