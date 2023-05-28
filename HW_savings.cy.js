
var randomEmail = require("random-email")

const investmentInfo = {
    email: randomEmail({ domain: "kiwi.com" }),
    fund: "Fellowship investment group",
    oneTimeInvestmentInput: "30000",
    yearsInput: "25"
}

it("Confirm empty fields after creating and deleting a new request", () => {
    cy.visit("savingscalculator.php")

    cy.log("Select fund")
    cy.get("#fundSelect").select(investmentInfo.fund)

    cy.log("Type amount of money")
    cy.get("[id=oneTimeInvestmentInput]").type(investmentInfo.oneTimeInvestmentInput)

    cy.log("Type period in years")
    cy.get("[id=yearsInput]").type(investmentInfo.yearsInput)

    cy.log("Type in email address and apply for savings")
    cy.get("[id=emailInput]").type(investmentInfo.email)
    cy.get("[data-test=apply-for-saving]").click()
    cy.get("ul.saving-list").find("li").eq(0).should("be.visible")

    cy.log("Verify that input fields are empty")
    cy.get("#fundSelect").should("have.value", null)
    cy.get("[id=yearsInput]").should("have.value", '')
    cy.get("[id=yearsInput]").should("have.value", '')
    cy.get("[id=emailInput]").should("have.value", '')
})

