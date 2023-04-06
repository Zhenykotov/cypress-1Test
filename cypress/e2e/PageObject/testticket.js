class Ticket {

    sckrol() {
        cy.scrollTo(0, 1500) 
    }
    
    selectcountry() {
        cy.get('#select2-billing_country-container').click();
        

        // cy.get('.select2-search__field').type('Ukraine').type('{enter}');
        // cy.get('#select2-billing_country-container').should('have.text', 'Ukraine')


    }
    option(){
        cy.get('#product_549').check().should('be.checked')
        cy.get('.woocommerce-message').should('be.visible')
    }
    addoptional(){
        cy.get('#addmorepax').check().should('be.checked');
        cy.wait(3000)
        cy.get('#addmorepax').uncheck()
    }
}
export default Ticket