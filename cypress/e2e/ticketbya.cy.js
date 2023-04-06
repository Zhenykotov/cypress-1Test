import Ticket from "./PageObject/testticket"

describe('test' , () => {
    it('check' , () =>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        const t = new Ticket;
        t.sckrol();
        t.selectcountry()
        t.option()
        t.addoptional()
    })
})