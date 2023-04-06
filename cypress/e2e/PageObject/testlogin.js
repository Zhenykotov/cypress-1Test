class Loginn {
    pressBtn () {
        cy.get('.y-z').click()

    }
    createaccount() {
        cy.get('#createAccountSubmit').click()
    }
    checkCreateAccount () {
        cy.contains('Create account').should('be.visible')
    }
    inputName(username){
        cy.get('#ap_customer_name').type(username)
    }
    inputEmail(useremail){
        cy.get('#ap_email').type(useremail)
    }
    inputPasword(userpasword){
        cy.get('#ap_password').type(userpasword)
    }
    repasword(userrepasword){
        cy.get('#ap_password_check').type(userrepasword)
    }
    clickbtn(){
        cy.get('#continue').click()
    }
    checkimport(){
        cy.get('#ap_password_check').should('be.visible')
    }
    login(){
        cy.get('.a-link-emphasis').click()
    }
    userlog(ul){
        cy.get('#ap_email').type(ul)
    }
    userpass(up){
        cy.get('#ap_password').type(up)
    }
    clbtn(){
        cy.get('#signInSubmit').click()
    }
}
export default Loginn;