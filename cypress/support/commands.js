Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
  cy.get('#firstName').type('Raiani')
  cy.get('#lastName').type('Alcides')
  cy.get('#email').type('railayli@exemplo.com')
  cy.get('#open-text-area').type('teste')
  cy.get('button[type="submit"]').click()
})
