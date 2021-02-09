/// <reference types="cypress" />

it ('LogIn',() => {

    const userName = `UserName${Math.round(Math.random() * 1000)}`

    const email = `email${Math.round(Math.random() * 1000)}@test.com`

    cy.visit('https://react-redux.realworld.io/#/register?')

    cy.get(':nth-child(1) > .form-control').type(userName)
    cy.get(':nth-child(2) > .form-control').type(email)
    cy.get(':nth-child(3) > .form-control').type('123454321')
    cy.get('.btn').click()

    cy.get(':nth-child(4) > .nav-link').contains(userName).should('exist')
})