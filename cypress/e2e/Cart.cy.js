let product = "https://www.demoblaze.com/prod.html?idp_=15";

describe('Cart',()=>{
    beforeEach(()=>{
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
    
    it("adds one product to cart",()=>{
         //ke url https://www.demoblaze.com/index.html
        //pastikan homapage muncul
        //pastikan sudah login diakun terdaftar
        //klik item yang akan di masukkan keranjang
        //pastikan barang yang pilih muncul
        //klik add to cart
       
        cy.visit(product);
        cy.contains(".btn", "Add to cart"). click();
        cy.on ("window:alert", (text)=>{
            expect(text).to.contains ("Product added.");
        });
    });
});