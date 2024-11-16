/// <reference types="cypress" />

import { OnRegistrationUser } from "../support/pages_objects/Registration.cy"
import { OnValidationApi } from "../support/pages_objects/validationapi.cy"

describe('Registro de usuario y login en automation exercise', () => {

  beforeEach('Visita la pagina web inicial', () => {
    cy.openPage()
    OnRegistrationUser.Signup()
    cy.wait(3000)
    OnRegistrationUser.DataNewUser()
    OnRegistrationUser.ButtonNewUser()
  })

  it('Realiza la creación de un nuevo usuario y valida respuesta del endpont get sodar', () => {
    OnValidationApi.Api()
    cy.registrationPage()
    OnRegistrationUser.Title()
    OnRegistrationUser.ValidateData()
    OnRegistrationUser.DataInputs()
    OnRegistrationUser.Day()
    OnRegistrationUser.DateOfBirth()
    OnRegistrationUser.Checkbox()
    OnRegistrationUser.CreateAccount()
    cy.created()
  })
})

