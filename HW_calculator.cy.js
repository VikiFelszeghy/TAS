describe("Test calculator for math functions and results", () => {

    beforeEach(() => {
        cy.visit("http://ajtyvit-app.westeurope.cloudapp.azure.com:8080/kalkulacka.php")
        cy.get("[id=firstInput]").type("10")
        cy.get("[id=secondInput]").type("2")
    })

    it("Can add numbers", () => {
        cy.log("Can add numbers")
        cy.get("[id=count]").click()
        cy.get("[id=result]").should("be.visible").and("have.text", "12")

    })

    it("Can deduct numbers", () => {
        cy.log("Can deduct numbers")
        cy.get("[id=deduct]").click()
        cy.get("[id=result]").should("be.visible").and("have.text", "8")
    })

    it("Can multiply numbers", () => {
        cy.log("Can multiply numbers")
        cy.get("[id=multiply]").click()
        cy.get("[id=result]").should("be.visible").and("have.text", "20")
    })

    it("Can divide numbers", () => {
        cy.log("Can divide numbers")
        cy.get("[id=divide]").click()
        cy.get("[id=result]").should("be.visible").and("have.text", "5")
    })

    it("Fields are empty after clicking Vynuluj", () => {
        cy.log("Fields are empty after Vynuluj")
        cy.get("[id=reset]").click()
        cy.get("[id=firstInput]").should("have.value", '')
        cy.get("[id=secondInput]").should("have.value", '')
    })

    it("Verify the latest results input when adding", () => {
        cy.log("Latest result input when adding")
        cy.get("[id=count]").click()
        cy.contains("h3", "Posledne vypocty").siblings("ul").find("li").eq(0).should("have.text", "10+2 = 12")
    })

    it("Verify the latest results input when deducting", () => {
        cy.log("Latest result input when deducting")
        cy.get("[id=deduct]").click()
        cy.contains("h3", "Posledne vypocty").siblings("ul").find("li").eq(0).should("have.text", "10-2 = 8")

    })

    it("Verify the latest results input when multiplying", () => {
        cy.log("Latest result input when multiplying")
        cy.get("[id=multiply]").click()
        cy.contains("h3", "Posledne vypocty").siblings("ul").find("li").eq(0).should("have.text", "10*2 = 20")

    })

    it("Verify the latest results input when dividing", () => {
        cy.log("Latest result input when dividing")
        cy.get("[id=divide]").click()
        cy.contains("h3", "Posledne vypocty").siblings("ul").find("li").eq(0).should("have.text", "10/2 = 5")

    })








})