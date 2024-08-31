const { faker } = require('@faker-js/faker');
const locators = require('../home-page/home-page-locators')

class homaPage {

    goToHomePage (){
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifiyingHomaPage (){
        cy.xpath(locators.dataid.imageCompanyLogo). should('be.visible');
    }

    clickSignUpMenu (){
        cy.xpath('//*[@id="signin2"]'). click();
    }

    verifiyingSignUpModel (){
        cy.xpath('//*[@id="signInModal"]'). should('be.visible');
        cy.wait(2000);
    }

    fillUsername (){
        var randomEmail = faker.person.firstName() + faker.number.int()+'@test.com'
        cy.xpath('//*[@id="sign-username"]'). type(randomEmail);
    }

    fillPassword (password){
        cy.xpath('//*[@id="sign-password"]'). type(password);
    }

    clickSignUpButton (){
        cy.xpath('//*[@type="button" and contains(text(), "Sign up")]').click();
    }

    verifiyingAller (){
        cy.on('window:alert',(t)=>{
              expect(t).to.contains('This user already exist.');
          })
    }
}
module.exports = new homaPage();