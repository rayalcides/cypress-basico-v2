

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })
  it('verificar o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  });

  it.only('preencha os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Raiani')
    cy.get('#lastName').type('Alcides')
    cy.get('#email').type('railayli@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
});

