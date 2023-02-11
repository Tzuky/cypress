/// <reference types="cypress" />

import { LoginAndMakeAppointments } from "./loginAndGoToAppoinments"
import { Auctions } from "./actionsOnPage"

const classAppointments = new LoginAndMakeAppointments() 
const actionsOnPage = new Auctions()

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
      actionsOnPage.getFacility(2)
      actionsOnPage.glyphicon()
      actionsOnPage.datePicker()
      actionsOnPage.closeDatePicker()
      actionsOnPage.addComment(comment1)
      actionsOnPage.makeAppointmentClick()
      actionsOnPage.verifyConfirmation()
      actionsOnPage.menuClick()
      actionsOnPage.historyClick()
      actionsOnPage.checkFacility('Seoul CURA Healthcare Center')
      //actionsOnPage.getHealthcare('None')
      actionsOnPage.getComment(comment1)
      actionsOnPage.getDate('22/02/2023')
    })

    it('make an apointment for Tokyo', () => {
      actionsOnPage.getFacility(0)
      actionsOnPage.radioButtonHealthcare()
      actionsOnPage.dateManualInput(dateTest2)
      actionsOnPage.closeDatePicker()
      actionsOnPage.addComment(comment2)
      actionsOnPage.makeAppointmentClick()
      actionsOnPage.verifyConfirmation()
      actionsOnPage.menuClick()
      actionsOnPage.historyClick()
      actionsOnPage.checkFacility('Tokyo CURA Healthcare Center')
      actionsOnPage.getHealthcare('None')
      actionsOnPage.getComment(comment2)
      actionsOnPage.getDate(dateTest2)
    })

    it('make an appointment for HongKong and check history', () => {
      actionsOnPage.getFacility(1)
      actionsOnPage.radioButtonHealthMedicAid()
      actionsOnPage.dateManualInput(dateTest3)
      actionsOnPage.closeDatePicker()
      actionsOnPage.addComment(comment3)
      actionsOnPage.makeAppointmentClick()
      actionsOnPage.menuClick()
      actionsOnPage.historyClick()
      actionsOnPage.checkFacility('Hongkong CURA Healthcare Center')
      actionsOnPage.getHealthcare('Medicaid')
      actionsOnPage.getComment(comment3)
      actionsOnPage.getDate(dateTest3)
    })
  })