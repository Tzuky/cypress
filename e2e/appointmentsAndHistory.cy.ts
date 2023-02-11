/// <reference types="cypress" />

import { LoginAndMakeAppointments } from "./loginAndGoToAppoinments"
import { Auctions } from "./auctionsOnPage"

const classAppointments = new LoginAndMakeAppointments() 
const auctionsOnPage = new Auctions()

const dateTest2 = '20/06/2023'
const dateTest3 = '22/04/2023'
const comment1 = 'Comment in test case 1'
const comment2 = 'Comment in test case 2'
const comment3 = 'Comment in test case 3'


describe('open Appointment app and perform few appointments and check history', () => {
    beforeEach(() => {
      classAppointments.navigate('https://katalon-demo-cura.herokuapp.com/')
      classAppointments.clickMakeAppointment()
      classAppointments.enterUsername('John Doe')
      classAppointments.enterPassword('ThisIsNotAPassword')
      classAppointments.clickLogin()
    })

    it('make appointment for Seoul ', () => {
      auctionsOnPage.getFacility(2)
      auctionsOnPage.glyphicon()
      auctionsOnPage.datePicker()
      auctionsOnPage.closeDatePicker()
      auctionsOnPage.addComment(comment1)
      auctionsOnPage.makeAppointmentClick()
      auctionsOnPage.verifyConfirmation()
    })

    it('make an apointment for Tokyo', () => {
      auctionsOnPage.getFacility(0)
      auctionsOnPage.radioButtonHealthcare()
      auctionsOnPage.dateManualInput(dateTest2)
      auctionsOnPage.closeDatePicker()
      auctionsOnPage.addComment(comment2)
      auctionsOnPage.makeAppointmentClick()
      auctionsOnPage.verifyConfirmation()
    })

    it('make an appointment for HongKong and check history', () => {
      auctionsOnPage.getFacility(1)
      auctionsOnPage.radioButtonHealthMedicAid()
      auctionsOnPage.dateManualInput(dateTest3)
      auctionsOnPage.closeDatePicker()
      auctionsOnPage.addComment(comment3)
      auctionsOnPage.makeAppointmentClick()
      
      //cy.get('#combo_facility').select(1)
      //cy.get('#radio_program_none').click()
      //cy.get('#txt_visit_date').type(dateTest3)
      //cy.get('#txt_visit_date').type('{esc}')
      //cy.get('#txt_comment').type(comment3)
      //cy.get('#btn-book-appointment').click()
      //cy.get('.col-xs-12.text-center').contains('Appointment Confirmation')
      cy.get('#menu-toggle').click()
      cy.get(':nth-child(4) > a').click()
      cy.get('#facility').contains('Hongkong CURA Healthcare Center')
      cy.get('#program').contains('Medicaid')
      cy.get('#comment').contains (comment3)
      cy.get('.panel-heading').contains(dateTest3)
    })
  })