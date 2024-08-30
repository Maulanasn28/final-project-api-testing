const homePage = require('../support/page/home-page/homePage')
const homaPage = require('../support/page/home-page/homePage')

describe('Signup', ()=>{
    beforeEach(()=>{
        //pre condition
        
        //cy.visit('https://www.demoblaze.com/index.html');
        //cy.xpath('//*[@id="nava"]'). should('be.visible');

    })
    it("with valid data", ()=>{
        //ke url https://www.demoblaze.com/index.html
        //pastikan homapage muncul
        //klik signup menu
        //pastikan modal signup muncul
        //isi username
        //isi password
        //klik signup

        homaPage.goToHomePage()
        homePage.verifiyingHomaPage()
        homaPage.clickSignUpMenu()
        homaPage.verifiyingSignUpModel()
        homaPage.fillUsername()
        homaPage.fillPassword('test123')
        homaPage.clickSignUpButton()
        homePage.verifiyingAller()

    })
})