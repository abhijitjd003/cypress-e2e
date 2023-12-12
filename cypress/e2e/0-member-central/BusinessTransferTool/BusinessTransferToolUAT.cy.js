var expect = chai.expect;

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("BusinessTransferTool", () => {
  it("Homepage Tests", () => {
    cy.clearCookies()
    const baseUrl = "https://uatmembercentral.renaissanceins.com/";

    cy.login(`${baseUrl}`, "RenAutoTester@gmail.com", "!!Cadillac50@");
    const BTTUrl = `${baseUrl}BusinessTransferTool/BTTHome/BTTMaster`;
    cy.wait(5000);
    cy.visit(BTTUrl);
    cy.get('.rais-page-banner .rais-page-title h1').should('not.be.empty'); //checks for header banner
    cy.get('[title="Bulk Movement"] > .k-icon').click(); //visit Bulk movement page
    cy.wait(10000);
    cy.get('#CustomerNameSearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#CustomerNameInput').type('Roberts');
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');//checks for agency name populated
    //cy.get('#CustomerNameInput').clear('Smith');
    cy.get('#AgencyBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#AgenciesSelectAllCheckBox').uncheck();
    cy.get('#A1020390D43').check();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get('#AgenciesSelectAllCheckBox').check();
    cy.get('#CustomerNameSearchPanelbar_pb_active > .k-link > .k-icon').click();
    cy.get('#AgencyBulkPolicySearchPanelbar_pb_active > .k-link > .k-icon').click();
    cy.get('#CarrierBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#CarrierBulkPolicySearchPanelbar_pb_active > .k-link > .k-icon').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('#WritingCompanyBulkPolicySearchPanelbar > .k-level-0 > .k-link > .k-icon').click();
    cy.get('#WritingCompanyBulkPolicySearchPanelbar_pb_active > .k-link > .k-icon').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('#CompanyGroupBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#CompanyGroupBulkPolicySearchPanelbar_pb_active > .k-link').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('#CompanyClassificationBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#CompanyClassificationBulkPolicySearchPanelbar_pb_active > .k-link').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('#PolicyTypeLobBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#PolicyTypeLobBulkPolicySearchPanelbar_pb_active > .k-link').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('#RegionsBulkPolicySearchPanelbar > .k-level-0 > .k-link').click();
    cy.get('#RegionsBulkPolicySearchPanelbar_pb_active > .k-link').click();
    cy.get('#SearchPolicies > .glyphicon').click();
    cy.wait(10000);
    cy.get("#BulkMovementGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2)").should('not.be.empty');
    cy.get('[title="Policy Detail Review"] > .k-icon').click();
    cy.wait(10000);
    cy.get('.emptyItem > :nth-child(1) > .k-icon').click();
    cy.get('.emptyItem .k-icon').click();
    cy.get('.rais-page-banner .rais-page-title h1').should('not.be.empty')
    cy.get('[title="Movement In Process Queue"] > .k-icon').click();
    cy.get('#CustomerNameSearchPanelbar > .k-level-0 > .k-link > .k-panelbar-item-text').click();
    cy.get('#CustomerNameInput').clear('R');
    cy.get('#CustomerNameInput').type('Robinson');
    cy.get('#SearchPoliciesMIPQ').click();
    cy.get('[title="Agency Activation"] > .k-icon').click();
    cy.get('[title="Dashboard"] > .k-icon').click();
    /* ==== End Cypress Studio ==== */
  });
});
