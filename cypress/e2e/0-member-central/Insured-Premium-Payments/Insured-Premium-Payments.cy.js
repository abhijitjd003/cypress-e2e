Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})

//login to MemberCentral
describe("InsuredPremiumPayments", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://stagingmembercentral.renaissanceins.com";
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo22");
    /* ==== Generated with Cypress Studio ==== */

//Navigate to Insured Premium Payments
    const userAccessUrl = `https://staginginsuredpayment.renaissanceins.com/invoice-data/all-data`;
    cy.request(userAccessUrl).then((response) => {
    expect(response.status).to.eq(200);
    cy.visit(userAccessUrl);
    cy.wait(2000);
  });
    
  //Apply an agency filter
    cy.get(':nth-child(1) > .item > .header > .name').click();
    cy.get(':nth-child(1) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').uncheck();
    cy.get(':nth-child(1) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > #autocomplete-input').type('abb');
    cy.get(':nth-child(1) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .options > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > .options-list > .list-item > .item-text').click();
    cy.get(':nth-child(1) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.get(':nth-child(5) > .item > .header > .name').click();

    //Apply date filter
    cy.get(':nth-child(5) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').uncheck();
    cy.get(':nth-child(5) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .options > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > .options-list > :nth-child(11) > .item-text').click();
    cy.get(':nth-child(5) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.get(':nth-child(3) > .item > .header').click();
    cy.wait(1000);

    //Apply a customer filter
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').uncheck();
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > #autocomplete-input').type('The 180');
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .options > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > .options-list > .list-item > .item-text').click();
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.get(':nth-child(3) > .item').click();
    cy.wait(1000);

    //Apply description filter
    cy.get(':nth-child(3) > .item > .header').click();
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').check();
    cy.get(':nth-child(3) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.get(':nth-child(2) > .item > .header > .name').click();
    cy.get(':nth-child(2) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.get(':nth-child(4) > .item > .header > .name').click();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer').click();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').uncheck();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .options > .cdk-virtual-scroll-viewport > .cdk-virtual-scroll-content-wrapper > .options-list > :nth-child(2)').click();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.wait(1000);
    
    //Select all in description filter
    cy.get(':nth-child(4) > .item > .header').click();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete').click();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .auto-complete > .checkbox').check();
    cy.get(':nth-child(4) > .item > lib-rais-auto-complete-filter-dropdown > .filter-dropdown > .filter-footer > .ok-btn').click();
    cy.wait(1000);
  
      /* ==== End Cypress Studio ==== */
    //});
    /* ==== End Cypress Studio ==== */
  
});
});
