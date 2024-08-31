describe('Checkout',()=>{
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
        //klik cart menu
        //pastikan barang yang pilih muncul
        //klik place order
        //isi data diri pembeli
        //klik purchase
       
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.wait(5000);
        cy.get('#name').type('Maulana');
        cy.get('#country'). type('Indonesia');
        cy.get('#city'). type('Yogyakarta');
        cy.get('#card'). type('123456789');
        cy.get('#month'). type('Agustus');
        cy.get('#year'). type('2024');
        cy.contains(".btn", "Purchase"). click();
        
    });
});
