//const userName = 'John Doe'
//const password = 'ThisIsNotAPassword'

export class LoginAndMakeAppointments{
    
    makeAppointmentButton = '#btn-make-appointment'
    userNameLocator = '#txt-username'
    passwordLocator = '#txt-password'
    loginButton = '#btn-login'

    navigate (url: string) {
        cy.visit(url)
    }
    
    clickMakeAppointment () {
        cy.get(this.makeAppointmentButton).click()
    }

    enterUsername (username: string) {
        cy.get(this.userNameLocator).type(username)
    }

    enterPassword (password: string) {
        cy.get(this.passwordLocator).type(password)
    }

    clickLogin () {
        cy.get(this.loginButton).click()
    }


}