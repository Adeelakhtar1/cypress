/// <reference types="cypress" />
class loginPage {
    elements = {
        Text_email:()=> cy.get('#join_neu_email_field'), 
        Text_password:()=> cy.get('#join_neu_password_field'),
        Btn_login: ()=> cy.get('.wt-validation > .wt-btn'),
        Msg_Validation:()   => cy.get('.wt-validation__message'),
        ClosingPage:()      => cy.get('span[aria-label="Close"]')
    }
    getlogintogmail(email,password)
    {
        cy.reload()
        cy.get('nav > .wt-display-flex-xs > :nth-child(1) > .wt-btn').click()
        
        if(email!==""){
            this.elements.Text_email().clear()
            this.elements.Text_email().type(email)   
        }
        if(password!==""){
            this.elements.Text_password().clear()
            this.elements.Text_password().type(password)
        }
        this.elements.Btn_login().click()
        cy.get('.wt-grid__item-xs-12 h1:nth-child(1)').should('contain.text',"Welcome")
        
    }

    validateRequiredFields(message){
        this.elements.Msg_Validation().should('contain.text',message)
        this.elements.ClosingPage().click()
   
       }
    
}
export default loginPage;