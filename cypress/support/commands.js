Cypress.Commands.add('openUrl', () => {
    cy.visit(Cypress.env("taskUrl"))
})