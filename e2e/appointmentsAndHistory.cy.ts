/// <reference types="cypress" />

import { LoginAndMakeAppointments } from "./loginAndGoToAppoinments"
import { Action } from "./actionsOnPage"
import { Assertion } from "./assertionsOnPage"

const classAppointments = new LoginAndMakeAppointments() 
const actionOnPage = new Action()
const assertionsOnPage = new Assertion()

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
      actionOnPage.getFacility(2)
      actionOnPage.glyphicon()
      actionOnPage.datePicker()
      actionOnPage.closeDatePicker()
      actionOnPage.addComment(comment1)
      actionOnPage.makeAppointmentClick()
      assertionsOnPage.verifyConfirmation()
      actionOnPage.menuClick()
      actionOnPage.historyClick()
      assertionsOnPage.checkFacility('Seoul CURA Healthcare Center')
      assertionsOnPage.getComment(comment1)
      assertionsOnPage.getDate('22/02/2023')
    })

    it('make an apointment for Tokyo', () => {
      actionOnPage.getFacility(0)
      actionOnPage.radioButtonHealthcare()
      actionOnPage.dateManualInput(dateTest2)
      actionOnPage.closeDatePicker()
      actionOnPage.addComment(comment2)
      actionOnPage.makeAppointmentClick()
      assertionsOnPage.verifyConfirmation()
      actionOnPage.menuClick()
      actionOnPage.historyClick()
      assertionsOnPage.checkFacility('Tokyo CURA Healthcare Center')
      assertionsOnPage.getHealthcare('None')
      assertionsOnPage.getComment(comment2)
      assertionsOnPage.getDate(dateTest2)
    })

    it('make an appointment for HongKong and check history', () => {
      actionOnPage.getFacility(1)
      actionOnPage.radioButtonHealthMedicAid()
      actionOnPage.dateManualInput(dateTest3)
      actionOnPage.closeDatePicker()
      actionOnPage.addComment(comment3)
      actionOnPage.makeAppointmentClick()
      assertionsOnPage.verifyConfirmation()
      actionOnPage.menuClick()
      actionOnPage.historyClick()
      assertionsOnPage.checkFacility('Hongkong CURA Healthcare Center')
      assertionsOnPage.getHealthcare('Medicaid')
      assertionsOnPage.getComment(comment3)
      assertionsOnPage.getDate(dateTest3)
    })
  })