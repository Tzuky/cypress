/// <reference types="cypress" />

describe('Orange demo site tests', () => {
    
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login and logout', () => {
        cy.get('[name=username]').type('Admin')
        cy.get('[type=password]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-img').click()
        cy.get('.oxd-userdropdown-link').contains('Logout').click()
        cy.get('.oxd-text--h5').should('contain', 'Login')
    })
        
    it ('Wrong Username - Fail Login', () => {
        cy.get('[name=username]').type('Admin-Wrong')
        cy.get('[type=password]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
    })

    it ('Wrong Password - Fail Login', () => {
        cy.get('[name=username]').type('Admin')
        cy.get('[type=password]').type('admin123-4')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
    })
})