import Product from "./PageObject/beforeEach";
import Shoes from "./PageObject/shoesformen";

describe('add different produccts in card', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.amazon.com/ref=nav_logo') 
    })

    it('add swimm goggles in card', () =>{
        const p = new Product();
        p.searchGoggles()
        p.clickButton();
        p.checkSearch();
        p.colorSelection(); 
        p.addcard();
    
        
    })

    it ('add shoes for men in card', () => {
        const sh = new Shoes();
        sh.searchShouse();
        sh.clickButtom();
        sh.selectShoes();
        sh.selectsize();
        sh.addcardd()
        

    })
})