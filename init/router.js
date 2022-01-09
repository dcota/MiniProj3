/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: App routes definition
*/

module.exports = (app) => {
    app.use('/', require('../routes/home.routes'))
    app.use('/sponsors', require('../routes/sponsor.routes'))
    app.use('/experts', require('../routes/expert.routes'))
}