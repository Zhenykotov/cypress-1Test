import Loginn from "./PageObject/testlogin";

describe('login', () => {

    it.only('create', () =>{

        cy.visit('https://www.6pm.com/');
        
        const lo = new Loginn ();
        lo.pressBtn ();
        lo.createaccount();
        lo.checkCreateAccount();
        lo.inputName('Yevhen');
        lo.inputEmail('zhenykotov1807@gmail.com');
        lo.inputPasword('Zofamu18!');
        lo.repasword('Zofamu18!');
        lo.clickbtn();
        lo.checkimport()
        lo.login()
        lo.userlog('zhenykotov1807@gmail.com')
        lo.userpass('Zofamu18!')
        lo.clbtn()
        
    })
})