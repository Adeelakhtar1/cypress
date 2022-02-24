/// <reference types="cypress" />
class SignupPage {
    elements = {
        Text_email:()       => cy.get('#join_neu_email_field'), 
        Text_password:()    => cy.get('#join_neu_password_field'),
        Text_name: ()       => cy.get('#join_neu_first_name_field'),
        Btn_Signup: ()      => cy.get('.wt-validation > .wt-btn'),
        Msg_Validation:()   => cy.get('.wt-validation__message'),
        ClosingPage:()      => cy.get('span[aria-label="Close"]')
    }
    signup(email,password,name)
    {
        cy.get('nav > .wt-display-flex-xs > :nth-child(1) > .wt-btn').click()
        cy.get('[data-heading-section=""] > .wt-display-flex-xs > .wt-btn').click()
        if(email!==""){
            this.elements.Text_email().clear()
            this.elements.Text_email().type(email)   
        }
        if(password!=""){
            this.elements.Text_password().clear()
            this.elements.Text_password().type(password)
        }
        if(name!=""){
            this.elements.Text_name().clear()
            this.elements.Text_name().type(name)
        }

        this.elements.Btn_Signup().click()
    }
     
    validateRequiredFields(message){
     this.elements.Msg_Validation().should('contain.text',message)
     this.elements.ClosingPage().click()

    }
}
export default SignupPage;