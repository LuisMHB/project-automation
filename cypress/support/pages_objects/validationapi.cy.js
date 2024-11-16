
/// <reference types="cypress" />

export class ValidationAPI {

    Api() {
        const url = 'https://ep1.adtrafficquality.google/getconfig/sodar?sv=200&tid=gda&tv=r20241112&st=env';

        cy.request({
            method: 'GET',
            url: url,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body).to.not.be.empty
            cy.log('Duración:', response.duration)
        });
    }

}

export const OnValidationApi = new ValidationAPI()
