Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})
describe("GrowthTrak", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://uatmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo222");
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo222");
    /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(1) > .home-menu-items > :nth-child(1) > .btn > .button-text').click();
    const submissionUrl = `${baseUrl}/RaisSubmission/SubmissionHome`;
    cy.request(submissionUrl).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(submissionUrl);

      /* ==== Generated with Cypress Studio ==== */
      //portico 1st case 
      cy.get("#btnNewSubmission").click();

      //cy.get("#customerName").clear();
      cy.get("#customerName").type("Test");
      cy.get('#customerName_listbox > [data-offset-index="4"]').click();
      cy.get('input[name="TypeOfBusiness"]').check();
      cy.get("#SubmissionType").select("New");
      cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
      cy.get(".carousel-control-next").click();
      cy.get(".k-select > .k-icon").click();
      cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
        .contains("Builders Risk")
        .click({ force: true });
      cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
      //cy.get('[data-day="08/24/2023"]').click();
      cy.get( ":nth-child(2) > .input-group > .input-group-addon > .glyphicon").click();
      //cy.get('[data-day="24/08/2023"]').click();
      
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
      cy.get(".carousel-control-next").click();
      cy.wait(1000);
      cy.get(".carousel-control-next").click();
      cy.get('input[name="IsAlreadySubmittedToCarrier"]').check();
      cy.get("#AccountStory").click();
      cy.get(".carousel-controls").click();
      // cy.get("#Submit").click();
      // cy.get(".container").click();
      // cy.get(".container > :nth-child(3)").click();
      // cy.get(".container > h2").click();
      // cy.get(".container > :nth-child(2)").click();
      // cy.get(".container > h2").click();

      // //portico 2nd case 
      //  cy.get("#btnNewSubmission").click();
      //  cy.get("#customerName").clear();
      //  cy.get("#customerName").type("Test");
      // cy.get('#customerName_listbox > [data-offset-index="4"]').click();
      // cy.get('input[name="TypeOfBusiness"]').check();
      // cy.get("#SubmissionType").select("New");
      // cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
      // cy.get(".carousel-control-next").click();
      // cy.get(".k-select > .k-icon").click();
      // cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
      //   .contains("Builders Risk")
      //   .click({ force: true });
      // cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
      // cy.get('[data-day="12/09/2022"]').click();
      // cy.get(
      //   ":nth-child(2) > .input-group > .input-group-addon > .glyphicon"
      // ).click();
      // cy.get('[data-day="12/01/2022"]').click();
      // cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
      // cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
      // cy.get(".carousel-control-next").click();


      // cy.get("#customerName").clear();
      // cy.get("#customerName").type("Test");
      // cy.get('#customerName_listbox > [data-offset-index="2"]').click();
      // cy.get('input[name="TypeOfBusiness"]').check("Commercial");
      // cy.get("#SubmissionType").select("New");
      // cy.get('input[name="IsNonRenewedCurrCarrier"]').check("true");
      // cy.get("#IsNonRenewedCurrCarrierReason").type("This is a test reason");
      // cy.get(".carousel-control-next").click();
      // cy.get(".k-select > .k-icon").click();
      // cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
      //   .contains("Builders Risk")
      //   .click({ force: true });
      // cy.get(":nth-child(1) > .input-group > .input-group-addon").click();
      // cy.get('[data-day="10/01/2022"]').click();
      // cy.get(
      //   ":nth-child(2) > .input-group > .input-group-addon > .glyphicon"
      // ).click();
      // cy.get('[data-day="12/05/2022"]').click();
      /* ==== End Cypress Studio ==== */
    //});
    /* ==== End Cypress Studio ==== */
  });
});
});
