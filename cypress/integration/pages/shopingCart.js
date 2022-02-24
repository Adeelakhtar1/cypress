/// <reference types="cypress" />

class ShopingCart{
    element={
        btn_AddToCart:()=>cy.contains('Add to basket')
    }
    AddItemToShoppingCart(item){
      cy.visit(item)
      cy.get('#inventory-variation-select-0').select("00g (10 mm)")
      cy.wait(5000)
      cy.get('#inventory-variation-select-1').select("Add O-ring (USD 44.50)")
      cy.wait(2000)
      this.element.btn_AddToCart().click()
      cy.get(".ge-cart-badge").should('contain.text',"1")

    }
RemoveItemFromShoppingCart(item){
       cy.contains('Remove').click()
        cy.get(".ge-cart-badge").should('contain.text',"0")
  
      }
}

export default ShopingCart;