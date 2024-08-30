describe("Login",()=>{
    
    it ("Login Scenario",()=>{
        //ke url https://www.demoblaze.com/index.html
        //pastikan homapage muncul
        //klik Login menu
        //pastikan modal login muncul
        //isi username
        //isi password
        //klik Login
        //masuk menggunakan akun terdaftar

        cy.visit ('https://www.demoblaze.com/index.html');
        cy.xpath('//*[@id="nava"]'). should('be.visible');
        cy.xpath('//*[@id="login2"]'). click();
        cy.xpath('//*[@id="logInModalLabel"]'). should('be.visible');
        cy.wait(1000);
        cy.xpath('//*[@id="loginusername"]'). type('Maulana28');
        cy.xpath('//*[@id="loginpassword"]'). type('test123');
        cy.get('[onclick="logIn()"]').click();
        cy.get('#logout2'). should('be.visible');
        cy.get('#nameofuser'). should('have.text', 'Welcome Maulana28')

    })
})