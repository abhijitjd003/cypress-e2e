Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
})
describe('Portico New Submission', () => {
  it('Verify the title of the page', () => {
    cy.visit('https://vearc.greythr.com/')
    cy.get('#username').type('VA122')
    cy.get('[type=password]').type('xxxx')
    cy.get('[type=submit]').click();
    
    
  })
  it('Verify the radio buttons are visible and enabled in Overview Submission Info Screen', () => {
    
  })
})