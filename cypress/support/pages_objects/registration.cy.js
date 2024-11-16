/// <reference types="cypress" />

export class RegistrationUser {

    Signup() {
        cy.contains('a', 'Signup / Login')
            .should('exist')
            .click()
    }

    DataNewUser() {
        const randomName = `User_${Math.random().toString(36).substring(2, 8)}`
        cy.get('input[data-qa="signup-name"]').type(randomName);
        const randomEmail = `test${Math.random().toString(36).substring(2, 8)}@gmail.com`;
        cy.get('input[data-qa="signup-email"]').type(randomEmail);
    }

    DataInputs() {
        cy.get('input[id="password"]').type('Luis@QA123')
        cy.get('input[id="first_name"]').type('Luis')
        cy.get('input[id="last_name"]').type('Herreño')
        cy.get('input[id="company"]').type('Test company SAS')
        cy.get('input[id="address1"]').type('Cll')
        cy.get('input[id="address2"]').type('100 # 56')
        cy.get('input[id="state"]').type('Quebec')
        cy.get('input[id="city"]').type('Rivieres')
        cy.get('input[id="zipcode"]').type('G0A 1H0')
        cy.get('input[id="mobile_number"]').type('(514) 123-4567')

    }

    ButtonNewUser() {
        cy.get('button[data-qa="signup-button"]', { timeout: 20000 })
            .should('be.visible')
            .click()
    }

    Title() {
        cy.get('input[id="id_gender1"]')
            .first()
            .check()
    }

    ValidateData() {
        cy.get('input[id="name"]').should('not.have.value', '')
        cy.get('input[id="email"]').should('not.have.value', '')
    }


    Day() {
        const randomday = Math.floor(Math.random() * 31) + 1;
        cy.get('select[id="days"]')
            .select(randomday.toString())
            .should('have.value', randomday.toString())
        console.log(randomday)
    }

    DateOfBirth() {
        cy.get('select[id="months"]').select('January').should('have.value', '1')
        cy.get('select[id="years"]').select('1998').should('have.value', '1998')
    }

    Checkbox() {
        cy.get('input[id="newsletter"]').check()
        cy.get('input[id="optin"]').check()
    }


    Country() {
        cy.get('select[id="country"]')
            .select('Canada')
            .should('have.value', 'Canada')
    }

    CreateAccount() {
        cy.contains('button', 'Create Account')
            .should('exist')
            .click()
    }

}

export const OnRegistrationUser = new RegistrationUser()