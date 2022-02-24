/// <reference types="cypress" />
import SignupPage from "../pages/Signup"    
import loginPage from "../pages/loginPage"
import ShopingCart from "../pages/shopingCart"

describe(`Test Suite for etsy website Testing`, function () {

    before(function () {
        cy.visit('https://www.etsy.com')
      })
    it.skip('Validate required feilds for signup page', function () {
        let signup =new SignupPage(); 
        cy.wait(1000);
        var feildsData = require('../../fixtures/SignupRequiredFeilds.json')
        
        feildsData.Emptyfields.forEach((feilds)=>{
            signup.signup(feilds.email,feilds.password,feilds.name)
            signup.validateRequiredFields(feilds.validationMessage)
        })
    })

    it('Verify Successfull login', function () {
        let login =new loginPage(); 
        var user = require('../../fixtures/LoginSuccess.json')
        
        user.userdetails.forEach((userdetail)=>{
            const login = new loginPage()
            login.getlogintogmail(userdetail.email,userdetail.password)
        })
        

    })

    it.skip('Login Failed Attempts validations', function () {
        let login =new loginPage(); 
        cy.wait(1000);
        var feildsData = require('../../fixtures/FailedAttempttoLogin.json')
        
        feildsData.Emptyfields.forEach((feilds)=>{
            const login = new loginPage()
            login.getlogintogmail(feilds.email,feilds.password)
            login.validateRequiredFields(feilds.validationMessage)
        })
        

    })
    
    
    it.skip('Verify user must able to add item in the cart', function () {
        let cart =new ShopingCart(); 
        var Data = require('../../fixtures/Cart.json')
        cart.AddItemToShoppingCart(Data.item)

    })

    it.skip('Verify user must able to remove item in the cart', function () {
        let cart =new ShopingCart(); 
        var Data = require('../../fixtures/Cart.json')
        cart.AddItemToShoppingCart(Data.item)
        cart.RemoveItemFromShoppingCart()


    })

})