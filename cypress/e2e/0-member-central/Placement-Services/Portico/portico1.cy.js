Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})
describe("Portico", () => {
  it("Landing on the Portico home page", () => {
    const baseUrl = "https://uatmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo222");
    cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo222");
    /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(1) > .home-menu-items > :nth-child(1) > .btn > .button-text').click();
    const submissionUrl = `${baseUrl}/RaisSubmission/SubmissionHome`;
    cy.request(submissionUrl).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(submissionUrl);

      /* ==== Generated with Cypress Studio ==== */
      //portico 1st case 
      cy.get("#btnNewSubmission").click();
    //})
  //})
    
      //it('Verify the Customer,DBA and Submission Type fields are visible and enabled', () => {
      cy.get("#customerName").clear().should('be.visible').should('be.enabled');
      //cy.get("#customerName").type("Test");
      cy.get("#DoingBusinessAs").clear().should('be.visible').should('be.enabled');
      cy.get("#SubmissionType").should('be.visible').should('be.enabled');
  //})

      //it('Verify the radio buttons are visible & unanswered by default', () => {
        cy.wait(3000)
        cy.get('[type="radio"]').should('be.visible').should('not.be','clicked')
        
  //})
      //it('Verify Submission type and other two questions are mandatory', () => {
        cy.wait(3000)
        cy.get("#customerName").clear().type("Test");
        cy.get('[data-slide="next"]').click();
        cy.get(".alert-danger").contains("Field is required.")
        cy.get("#SubmissionType").select("New");
        cy.get('[data-slide="next"]').click();
        cy.get(".alert-danger").contains("Field is required.")
        cy.get('[value="Commercial"]').click();
        cy.get('[data-slide="next"]').click();
        cy.get(".alert-danger").contains("Field is required.")
      
        cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
        cy.get('[data-slide="next"]').click();
        cy.get('[data-slide="prev"]').click();
        cy.get('input[name="IsNonRenewedCurrCarrier"]').check("true");
        //cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
        cy.get('[data-slide="next"]').click();

       
        cy.get(".alert-danger").contains("Field is required.")
        cy.get("#IsNonRenewedCurrCarrierReason").type("This is a test reason");
        cy.get(".carousel-control-next").click();
        cy.wait(1000)
        cy.get('.k-select > .k-icon').click()
        //cy.wait(1000)
        // cy.get('#ddlLOB0_listbox').scrollIntoView().should('be.visible');
        // cy.get('#ddlLOB0_listbox').select("Builders Risk");
        // cy.get('#ddlLOB0_listbox').should('Builders Risk', 'Builders Risk');
        cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text').click()
          // .contains("Commercial Auto")
          // .click({ force: true });
          
          // cy.get('.k-animation-container > #ddlLOB0-list > .k-list-filter > .k-textbox')
          // .type('Crime')
          // .type('{enter}').type('{enter}');
          cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
        // cy.get('[data-day="08/25/2023"]').click();
        cy.get( ":nth-child(2) > .input-group > .input-group-addon > .glyphicon").click();
        // cy.get('[data-day="08/31/2023"]').click();
        cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
        cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
        cy.get(".carousel-control-next").click();
        cy.wait(1000);

        cy.get('#AddDocument').click();
        cy.get('#NewDocumentType_3').click()

})

   //cy.get('#customerName_listbox > [data-offset-index="4"]').click();
//       cy.get('input[name="TypeOfBusiness"]').check();
//       cy.get("#SubmissionType").select("New");
//       cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
//       cy.get(".carousel-control-next").click();
//       cy.get(".k-select > .k-icon").click();
//       cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
//         .contains("Builders Risk")
//         .click({ force: true });
//       cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
//       cy.get('[data-day="12/09/2022"]').click();
//       cy.get(
//         ":nth-child(2) > .input-group > .input-group-addon > .glyphicon"
//       ).click();
//       cy.get('[data-day="12/01/2022"]').click();
//       cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
//       cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
//       cy.get(".carousel-control-next").click();
//       cy.wait(1000);
//       cy.get(".carousel-control-next").click();
//       cy.get('input[name="IsAlreadySubmittedToCarrier"]').check();
//       cy.get("#AccountStory").click();
//       cy.get(".carousel-controls").click();
//       cy.get("#Submit").click();
//       cy.get(".container").click();
//       cy.get(".container > :nth-child(3)").click();
//       cy.get(".container > h2").click();
//       cy.get(".container > :nth-child(2)").click();
//       cy.get(".container > h2").click();
      
//       // //portico 2nd case 
//       //  cy.get("#btnNewSubmission").click();
//       //  cy.get("#customerName").clear();
//       //  cy.get("#customerName").type("Test");
//       // cy.get('#customerName_listbox > [data-offset-index="4"]').click();
//       // cy.get('input[name="TypeOfBusiness"]').check();
//       // cy.get("#SubmissionType").select("New");
//       // cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
//       // cy.get(".carousel-control-next").click();
//       // cy.get(".k-select > .k-icon").click();
//       // cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
//       //   .contains("Builders Risk")
//       //   .click({ force: true });
//       // cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
//       // cy.get('[data-day="12/09/2022"]').click();
//       // cy.get(
//       //   ":nth-child(2) > .input-group > .input-group-addon > .glyphicon"
//       // ).click();
//       // cy.get('[data-day="12/01/2022"]').click();
//       // cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
//       // cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
//       // cy.get(".carousel-control-next").click();

      
//       // cy.get("#customerName").clear();
//       // cy.get("#customerName").type("Test");
//       // cy.get('#customerName_listbox > [data-offset-index="2"]').click();
//       // cy.get('input[name="TypeOfBusiness"]').check("Commercial");
//       // cy.get("#SubmissionType").select("New");
//       // cy.get('input[name="IsNonRenewedCurrCarrier"]').check("true");
//       // cy.get("#IsNonRenewedCurrCarrierReason").type("This is a test reason");
//       // cy.get(".carousel-control-next").click();
//       // cy.get(".k-select > .k-icon").click();
//       // cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
//       //   .contains("Builders Risk")
//       //   .click({ force: true });
//       // cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
//       // cy.get('[data-day="10/01/2022"]').click();
//       // cy.get(
//       //   ":nth-child(2) > .input-group > .input-group-addon > .glyphicon"
//       // ).click();
//       // cy.get('[data-day="12/05/2022"]').click();
//       /* ==== End Cypress Studio ==== */
//     });
//     /* ==== End Cypress Studio ==== */
});

});

