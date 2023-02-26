/// <reference types="cypress" />
import { any } from "cypress/types/bluebird"
import { forEach, includes } from 'cypress/types/lodash'
import { JsxEmit } from "typescript"
// import { BaseURLandToken } from "./baseUrlAndToken"


const baseUrl = 'https://gorest.co.in'
const token = 'ff19695d29497377c2978022033d5ba0d7519fc1b6a367e5317bf96ab3aafbe5'

describe('play around with APIs', () => {

    it('list comments and check json properties and status code', () => {
        cy.request(baseUrl + '/public/v2/comments').then((res) => {
            expect(res.status).to.eq(200)

            const entireJsonBlock = JSON.stringify(res.body[0])
            const nameOnFirstComment = res.body[0].name
            cy.log(nameOnFirstComment)
            cy.log(entireJsonBlock)
            expect(entireJsonBlock).include('name')
            expect(entireJsonBlock).includes('body')
            expect(entireJsonBlock).includes('post_id')
            expect(entireJsonBlock).includes('id')
        })


    })

    // it('post a comment and verify content', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: baseUrl + '/public/v2/users/812/posts',
    //         headers: { 'Authorization': 'Bearer ' + token },
    //         body: {
                
    //         }
    //     })
    // })

})
