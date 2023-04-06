class Shoes
{
    searchShouse(){
        cy.get('#twotabsearchtextbox.nav-input').type('shouse man')
    }

    clickButtom(){
        cy.get('#nav-search-submit-button').click();
    }
    selectShoes(){
        cy.contains("Men's Nampa-Groton Food Service Shoe").click().should('be.visible')
    }
    selectsize(){
        cy.get('#size_name_12 > .a-button-inner > .a-button-input').click().wait(3000)
    }

    addcardd(){
        cy.get('#add-to-cart-button').click({force: true})
    }


}
export default Shoes;