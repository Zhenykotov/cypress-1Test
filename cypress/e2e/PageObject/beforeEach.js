class Product
{
    searchGoggles(){
        cy.get('#twotabsearchtextbox.nav-input').type('swimm goggles arena')
        
    }
    
    clickButton(){
        
        cy.get('#nav-search-submit-button').click()
    }

    checkSearch(){
        cy.contains('Arena Unisex Cobra Ultra Swipe Racing Swim Goggles, Men and Women Swipe Anti Fog Technology Dual Strap Mirror/Non Mirror Lens')
        .click().should('be.visible')

    }

    colorSelection(){
        cy.get("[aria-labelledby='color_name_11-announce']").click({force: true}).wait(3000)
        

    }

    addcard(){
        cy.get('#add-to-cart-button').click()

    }
    checkCard(){
        cy.url().should('include','/cart/smart-wagon?newItems=98c162c7-5eaf-43c4-94e8-9f888f386788,3')
    }


}

export default Product;
