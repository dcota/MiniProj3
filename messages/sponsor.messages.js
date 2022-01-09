/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: definition of messages to be included in responses
*/

module.exports = {
    success: {
        s0: {
            http: 201,
            code: 'Sponsor created',
            type: 'success'
        },
        s1: {
            http: 200,
            code: 'Sponsor updated',
            type: 'success'
        },
        s2: {
            http: 200,
            code: 'List of all sponsors',
            type: 'success'
        },
        s3: {
            http: 200,
            code: 'Sponsor deleted',
            type: 'success'
        },
        s4: {
            http: 204,
            code: 'No Sponsors',
            type: 'success'
        },
        s5: {
            http: 200,
            code: 'Sponsor data for id',
            type: 'success'
        }
    },
    error: {
        e0: {
            http: 404,
            code: 'Sponsor not found'
        },
        e1: {
            http: 500,
            code: 'Internal Server Error'
        }
    }
}
