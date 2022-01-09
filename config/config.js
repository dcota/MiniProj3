/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: db connection configs
*/

module.exports = {
    mongodb: {
        uri: process.env.MONGOURL,
        collections: {
            sponsor: 'sponsors',
            expert: 'experts'
        }
    }
}