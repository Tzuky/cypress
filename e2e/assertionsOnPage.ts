export class Assertion {
    
confirmAppointmentLocation = '.col-xs-12.text-center'
facilityHistoryLocator = '#facility'
healthcareHistoryLocator = '#program'
commentHistoryLocator = '#comment'
dateHistoryLocator = '.panel-heading'

verifyConfirmation () {
    cy.get(this.confirmAppointmentLocation).contains('Appointment Confirmation')
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