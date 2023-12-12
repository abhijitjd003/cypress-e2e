Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false

})
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Portico submission', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://uatmembercentral.renaissanceins.com/');
    cy.get('#UserName').clear('MMTestExt@MM.com');
    cy.get('#UserName').type('MMTestExt@MM.com');
    cy.get('#Password').clear('@');
    cy.get('#Password').type('@MMRodeo222');
    cy.get('.btn').click();
    //cy.get('.show-carrier-lob-list-section > .btn > .button-text').click();
    cy.visit('https://uatmembercentral.renaissanceins.com/RAISSubmission');

    cy.wait(12000);
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#btnNewSubmission').click();
    cy.get('#customerName').clear('M');
    cy.get('#customerName').type('MMautomation');
    cy.get('#frontDoor').click();
    cy.get('#DoingBusinessAs').clear('A');
    cy.get('#DoingBusinessAs').type('Automation');
    cy.get('#frontDoor').click();
    cy.get('#SubmissionType').select('New');
    cy.get('[style="display:flex; justify-content: space-between;"] > :nth-child(1) > :nth-child(2) > label').click();
    cy.get('#radiobcc87431-50ca-4b63-a0b8-f0a311e3a6d3').check();
    cy.get('#IsNonRenewedCurrCarrierradio308a84f3-1e54-4076-a211-4bad2b9f26ab').check();
    cy.get('.carousel-control-next').click();
    cy.get('.k-select').click();
    cy.get('[style="width: 200px; height: 406px; box-sizing: content-box; overflow: visible; display: block; position: absolute; top: 506.6px; z-index: 10002; left: 239.6px;"] > #ddlLOB0-list > .k-list-scroller > #ddlLOB0_listbox > [data-offset-index="6"] > .k-input-text').click();
    cy.get(':nth-child(1) > .input-group > .input-group-addon > .glyphicon').click();
    cy.get('[data-day="06/19/2023"]').click();
    cy.get(':nth-child(2) > .input-group > .input-group-addon').click();
    cy.get('[data-day="06/20/2023"]').click();
    cy.get('#TargetPremium8e4da0d1-9692-48c0-ab29-8c66f3d65fb2').clear('6');
    cy.get('#TargetPremium8e4da0d1-9692-48c0-ab29-8c66f3d65fb2').type('68');
    cy.get('.carousel-inner > .active > :nth-child(2)').click();
    cy.get('.carousel-control-next').click();
    cy.get('#TargetDatef4966de5-e774-438e-97d2-6cceb4919695').click();
    cy.get('.has-error > .input-group > .input-group-addon').click();
    cy.get('[data-day="06/18/2023"]').click();
    cy.get('.col-md-7').click();
    cy.get('#TargetPremium8e4da0d1-9692-48c0-ab29-8c66f3d65fb2').click();
    cy.get('.col-md-7').click();
    cy.get('.has-error > .input-group > .input-group-addon > .glyphicon').click();
    cy.get('[data-day="06/19/2023"]').click();
    cy.get('.col-md-7').click();
    cy.get('#EffectiveDate9f90e0e6-e690-4348-8f92-fb9b915278d2').click();
    cy.get(':nth-child(1) > .input-group > .input-group-addon > .glyphicon').click();
    cy.get('[data-day="06/20/2023"]').click();
    cy.get('.col-md-7').click();
    cy.get('.col-md-7').click();
    cy.get('.carousel-control-next').click();
    cy.get('.carousel-control-next').click();
    cy.get('.active > .row > .col-md-offset-1 > :nth-child(1)').click();
    cy.get('.active > .row > .col-md-offset-1 > :nth-child(1) > :nth-child(3) > label').click();
    cy.get('#radioIsNonRenewedCurrCarrierf2f6097e-70b2-4158-8c51-aed3434af6e9').check();
    cy.get('#Submit').click();
    cy.get('#btnSubmissionList').click();
    /* ==== End Cypress Studio ==== */
  });
})