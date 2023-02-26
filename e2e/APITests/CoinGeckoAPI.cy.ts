/// <reference types="cypress" />

import { expect, should } from "chai"
import { includes } from "cypress/types/lodash"

const baseUrl = 'https://api.coingecko.com/api/v3' 
const cardanoId = 'cardano'

describe('Get Cardano coin info', () => {
    beforeEach('Get Cardano Responce to perform assertions', () => {
        cy.request(baseUrl+'/simple/price?ids=cardano&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=true').as('adaPrice')
        cy.request(baseUrl+'/coins/'+cardanoId).as('moreDetails')
    })

    it('Verify that status code is 200', () => {
        cy.get('@adaPrice').its('status').should('eq', 200).then
        })
    it('Print Response', () => {
        cy.get('@adaPrice').then((res) => {
             let printJson = JSON.stringify(res)
             cy.log(printJson) 
        })
    })

    it('Verify that status code is 200 on second request', () => {
        cy.get('@moreDetails').its('status').should('eq', 200)
    })

    it('Print the more detiled response', () => {
        cy.get('@moreDetails').then((res) => {
            let printDetails = JSON.stringify(res)
            cy.log(printDetails) 
       })
    })

        
})
        
        
        
       
    

