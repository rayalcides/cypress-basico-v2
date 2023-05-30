

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })
  it('verificar o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  });

  it('preencha os campos obrigatórios e envia o formulário', () => {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
    cy.get('#firstName').type('Raiani')
    cy.get('#lastName').type('Alcides')
    cy.get('#email').type('railayli@exemplo.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('Mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Raiani')
    cy.get('#lastName').type('Alcides')
    cy.get('#email').type('railayli@exemplo,com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('Campo de telefone continua vazio quando preenchido com valor não-numérico', () =>{
    cy.get('#phone')
     .type('abcdefghij')
     .should('have.value', '')
  })

  it('Exibe mansagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    cy.get('#firstName').type('Raiani')
    cy.get('#lastName').type('Alcides')
    cy.get('#email').type('railayli@exemplo.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa os campos nome, sobrenome, email, e telefone', () =>{
   cy.get('#firstName')
    .type('Raiani')
    .should('have.value', 'Raiani')
    .clear()
    .should('have.value', '')
   cy.get('#lastName')
    .type('Alcides')
    .should('have.value', 'Alcides')
    .clear()
    .should('have.value', '')
   cy.get('#email')
    .type('railayli@exemplo.com')
    .should('have.value', 'railayli@exemplo.com')
    .clear()
    .should('have.value', '')
   cy.get('#phone')
    .type('1234560')
    .should('have.value', '1234560')
    .clear()
    .should('have.value', '')
   cy.get('#open-text-area')
    .type('teste')
    .should('have.value', 'teste')
    .clear()
    .should('have.value', '')
  })

  it('Exibi mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('Envia o formulário com sucesso usando um comando customizado', () =>{
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })
});

