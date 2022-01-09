/*
MEIW - Programação Web Avançada
Auhtor: Duarte Cota
Description: definition of messages to be included in responses
*/

module.exports = {
    success: {
        s0: {
            http: 201,
            code: 'Expert created',
            type: 'success'
        },
        s1: {
            http: 200,
            code: 'Expert updated',
            type: 'success'
        },
        s2: {
            http: 200,
            code: 'List of all Experts',
            type: 'success'
        },
        s3: {
            http: 200,
            code: 'Expert deleted',
            type: 'success'
        },
        s4: {
            http: 204,
            code: 'No Experts',
            type: 'success'
        },
        s5: {
            http: 200,
            code: 'Expert data for id',
            type: 'success'
        }
    },
    error: {
        e0: {
            http: 404,
            code: 'Expert not found'
        },
        e1: {
            http: 500,
            code: 'Internal Server Error'
        }
    }
}
