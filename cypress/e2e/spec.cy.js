import Login from "./PageObject/Test"


describe ('6pm', () => { 

  it('CheckLogin', () => {
    cy.visit('https://www.6pm.com/')

    const log = new Login();
    log.clickLogin()
    log.signin()
    log.enterEmail('Zhenykotov1807@gmail.com')
    log.enterPassword('Qwerty18')
    log.clickSubmit()
    

    
    

  })
})  