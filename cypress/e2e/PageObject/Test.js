class Login 
{
    
    clickLogin () {
        cy.get("[aria-expanded='false'][data-header-account-toggle='true']").click()
    }
    
    signin () {
        cy.contains('Sign-In').should('be.visible');
        
    }
    
    enterEmail (userEmail){
        cy.get('#ap_email.a-input-text').type(userEmail)
    }
    
    enterPassword (userpasword) {
        cy.get('#ap_password').type(userpasword);
    }
    
    clickSubmit () {
        cy.get('#signInSubmit').click();
    }


}
export default Login;
