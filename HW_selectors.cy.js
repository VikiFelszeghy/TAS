/// <reference types="Cypress" />

it('Fellowship: it displays complete when all the points are used', () => {
    cy.visit('fellowship.php')
    //TODO: zaklikni na stránke elementy s textom Frodo, Legolas, Gandalf, Aragorn
    cy.log("Click on Frodo, Legolas, Gandalf and Aragorn")
    cy.contains("h1", "Frodo").click()
    cy.contains("h1", "Legolas").click()
    cy.contains("h1", "Gandalf").click()
    cy.contains("h1", "Aragorn").click()

    cy.log("Verify text")
    cy.get('.points-left').find('h3').should('have.text', 'Complete')
});


it('Spelleology: it displays first spell', () => {
    cy.visit('spelleology.php')
    //TODO: nájdi prvý spell element pomocou funkcie eq() a otvor jeho detail
    cy.log("Find first spell and click")
    cy.contains("h1", "Spelleology").siblings("ul").find("li").eq(0).click()
    cy.get(".modal-container").should("be.visible")

    cy.log("Verify Accio in header")
    cy.get('.modal-container')
        .find('.modal-header')
        .should('have.text', 'Accio')
})



it('Spelleology: it displays last spell', () => {
    cy.visit('spelleology.php')
    //TODO: nájdi posledný spell element pomocou funkcie last() a otvor jeho detail
    cy.log("Find last spell and click")
    cy.contains("h1", "Spelleology").siblings("ul").find("li").last().click()
    cy.get(".modal-container").should("be.visible")

    cy.log("Verify Windgardium Leviosa in header")
    cy.get('.modal-container')
        .find('.modal-header')
        .should('have.text', 'Wingardium Leviosa')
})
