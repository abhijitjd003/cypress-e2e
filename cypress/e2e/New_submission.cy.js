Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
})
describe('Portico New Submission', () => {
  it('Verify the Customer and DBA fields are visible and enabled in Overview Customer Info Screen', () => {
    cy.visit('https://stagingmembercentral.renaissanceins.com/');
    //cy.get('#UserName').clear('abbmaster@renaissanceins.com');
    cy.get('#UserName').type('abbmaster@renaissanceins.com');
    //cy.get('#Password').clear('@');
    cy.get('#Password').type('RaisIn$#1');
    cy.get('.btn').click();
    cy.visit('https://stagingporticomarketmatch.renaissanceins.com/portico/new-submission/customer-info')
    cy.get('input[placeholder="Customer*"]').should('be.visible').should('be.enabled')
    cy.get('input[name=dba]').should('be.visible').should('be.enabled')
  })
  it('Verify that Customer Name field is mandatory', () => {
    cy.get('input[placeholder="Customer*"]').click();
    cy.get('input[name=dba]').type('Testing');
    cy.wait(2000)
    cy.get('.primary').click()
    cy.get('.error-block')
    cy.get('.error-message').contains(' You have not filled out all required fields. Please review all the fields to make sure they have been answered. ')
    
  })
  it('Verify that DBA field is non-mandatory', () => {
    cy.wait(3000)
    cy.get('input[placeholder="Customer*"]').type('MMtest');
    cy.get('input[name=dba]').clear();
    cy.wait(3000)
    cy.get('.primary').click()
    
  })

  it('Verify the radio buttons are visible and all the questions are unanswered by default in Overview Submission Info Screen', () => {
    cy.wait(3000)
    cy.get('[type="radio"]').should('be.visible').should('not.be','clicked')
    
  })
  it('Verifying each question title', () => {
    cy.get('[questiontext="Business Type*"] > .question-container > .question > .question-text-container > .question-text').contains('Business Type* ')
    cy.get('[questiontext="Submission Type*"] > .question-container > .question > .question-text-container > .question-text').contains('Submission Type* ')
    cy.get('[questiontext="Are any policies being non-renewed by current carrier?*"] > .question-container > .question > .question-text-container > .question-text').contains('Are any policies being non-renewed by current carrier?* ')
    cy.get('[questiontext="Have you submitted this to any other carriers?*"] > .question-container > .question > .question-text-container > .question-text').contains('Have you submitted this to any other carriers?* ')
    
  })
  it('Verify that all the questions are mandatory(Error message pops up)', () => {
    cy.get('.right-controls').click()
    cy.get('.error-block')
    cy.get('.error-message').contains(' You have not filled out all required fields. Please review all the questions to make sure they have been answered. ')

    cy.get('.question-text-error').should('have.css','color','rgb(196, 15, 56)')//To check all the questions turn into red
    cy.wait(5000)
  })
  it('Answer for all the questions', () => {
    cy.get('[questiontext="Business Type*"] > .question-container > .question > .options > :nth-child(1) > .option').click()
    cy.get('[questiontext="Submission Type*"] > .question-container > .question > .options > :nth-child(1)').click()
    cy.get('[questiontext="Are any policies being non-renewed by current carrier?*"] > .question-container > .question > .options > :nth-child(2)').click()
    cy.get('[questiontext="Have you submitted this to any other carriers?*"] > .question-container > .question > .options > :nth-child(2)').click()
    cy.wait(3000)
    cy.get('.primary').click() 
  })
  it('3rd and 4th questions, if yes (text box is mandatory)', () => {
    cy.get('.left-controls').click()
    cy.get('[questiontext="Business Type*"] > .question-container > .question > .options > :nth-child(1) > .option').click()
    cy.get('[questiontext="Submission Type*"] > .question-container > .question > .options > :nth-child(1)').click()
    cy.get('[questiontext="Are any policies being non-renewed by current carrier?*"] > .question-container > .question > .options > :nth-child(1)').click()
    cy.get('[questiontext="Have you submitted this to any other carriers?*"] > .question-container > .question > .options > :nth-child(1)').click()
    
    cy.get('.primary').click()
    cy.wait(5000)
    cy.get('.error-block')
    cy.get('.error-message').contains(' You have not filled out all required fields. Please review all the questions to make sure they have been answered. ')
    cy.get('[placeholder="Reasons*"]').type('ABCD')
    cy.get('[placeholder="Please list carriers below*"]').type('EFGH')
    cy.get('.primary').click() 
  
  })
  it('Verify that the user cannot skip Line of Business page', () => {
    cy.get('.primary').click()
    cy.get('.error-block')
    cy.get('.error-message').contains(' You have not filled out all required fields. Please review all the questions to make sure they have been answered. ')
  })
  

  
})
