export class Auctions {
    
    facilityLocator = '#combo_facility'
    glyphiconLocator = '.glyphicon'
    datePickerSelect = ':nth-child(4) > :nth-child(4)'
    dateFieldLocator = '#txt_visit_date'
    commentFieldLocator = '#txt_comment'
    makeAppointmentButtonLocator = '#btn-book-appointment'
    confirmAppointmentLocation = '.col-xs-12.text-center'
    radioButtonHealthcareNone = '#radio_program_none'
    radioButtonHealthcareMadicAid = '#radio_program_medicaid'
    menuLocator = '#menu-toggle'
    historyLocator = ':nth-child(4) > a'
    facilityHistoryLocator = '#facility'
    healthcareHistoryLocator = '#program'
    commentHistoryLocator = '#comment'
    dateHistoryLocator = '.panel-heading'



    getFacility (fromDropdown: number): void {
        cy.get(this.facilityLocator).select(fromDropdown)
    }

    glyphicon () {
        cy.get(this.glyphiconLocator).click()
    }

    datePicker () {
        cy.get(this.datePickerSelect).click()
    }

    closeDatePicker () {
        cy.get(this.dateFieldLocator).type('{esc}')
    }

    dateManualInput (inputDate: string): void {
        cy.get(this.dateFieldLocator).type(inputDate)
    }

    addComment (comment: string): void{
        cy.get(this.commentFieldLocator).type(comment)
    }

    makeAppointmentClick () {
        cy.get(this.makeAppointmentButtonLocator).click()
    }

    verifyConfirmation () {
        cy.get(this.confirmAppointmentLocation).contains('Appointment Confirmation')
    }

    radioButtonHealthcare (): void {
        cy.get(this.radioButtonHealthcareNone).click()
    }

    radioButtonHealthMedicAid (): void {
        cy.get(this.radioButtonHealthcareMadicAid).click()
    }

    menuClick () {
        cy.get(this.menuLocator).click()
    }

    historyClick () {
        cy.get(this.historyLocator).click()
    }

    checkFacility (facilityName: string): void {
        cy.get(this.facilityHistoryLocator).contains(facilityName)
    }

    getHealthcare (getHealthcare: string): void {
        cy.get(this.healthcareHistoryLocator).contains(getHealthcare)
    }

    getComment (commentHistory: string): void {
        cy.get(this.commentHistoryLocator).contains (commentHistory)
    }

    getDate (dateHistory: string): void {
        cy.get(this.dateHistoryLocator).contains(dateHistory)
    }


}