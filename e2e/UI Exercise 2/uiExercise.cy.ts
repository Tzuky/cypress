/// <reference types="cypress" />

describe('Orange demo site tests', () => {
    
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login', () => {
        cy.get('[name=username]').type('Admin')
        cy.get('[type=password]').type('admin123')
        cy.get('.oxd-button').click()
    })
})