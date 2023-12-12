Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})  
  
  
it('LoginPage', function() {

  //Verification of Incorrect credentials error
    cy.visit('uatmembercentral.renaissanceins.com');
    cy.get('#UserName').type('MMTestExt@MM.com');
    cy.get('#Password').type('@MMRodeo2'); // Type incorrect password
    cy.get('.btn').click();
    //Verify error message
    cy.get('li').contains("We couldn't find an account with that email address or password. Please note you will have a maximum of 3 login attempts before your account is locked. If issue persists, please reset your password using the “Forgot Password” link below.");
    
  //Verification for Email address required error on Forgot password page to reset password 
    cy.get('.user-clickables > a').click();
    cy.get('#UserName').click();
    cy.get('.user-bottom').click();
    cy.get('.btn').click();
    cy.get('#UserName-error').contains("The Email Address field is required");

  //Reset password page via Access code.Incorrect access code
    cy.visit('uatmembercentral.renaissanceins.com');
    cy.get(':nth-child(2) > .user-clickables').click();
    cy.get('#Email').type('MMTestExt@MM.com');
    cy.get('#Password').type('@MMRodeo22');
    cy.get('#Password').click();
    cy.get('#AccessToken').type('123456');
    //cy.get('form > :nth-child(5)').click();
    cy.get('#ConfirmPassword').type('@MMRodeo22');
    cy.get('.btn').click();
    cy.get('.btn').click();

  });
