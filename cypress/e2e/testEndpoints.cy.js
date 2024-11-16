/// <reference types="cypress" />


describe('Pruebas para el endpoint v1/test de la API echo-server', () => {

    it('Muestra el body, status, response y headers de los endpoints', () => {
        cy.api({
            method: 'GET',
            url: 'https://echo-serv.tbxnet.com/v1/test',
            failOnStatusCode: false
        })
    })

    it('Pruebas para el endpoint mobile/auth de la API echo-server', () => {
        cy.api({
            method: 'POST',
            url: 'https://echo-serv.tbxnet.com/v1/mobile/auth',
            body: {
                "code": "SYS-ERR",
                "message": "Unexpected token p in JSON at position 0",
                "details": null,
                "status": 400
            },
            failOnStatusCode: false
        })
    })

})
