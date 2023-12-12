var expect = chai.expect;


describe("RevenueTrak", () => {
  it("Homepage Tests", () => {
    cy.clearCookies()
    const baseUrl = "https://uatmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo22");
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo22");
    const revenueTrakUrl = `${baseUrl}/Areas/RevenueTrak/AgencyDocuments.aspx`;
    cy.request(revenueTrakUrl).then((response) => {
      cy.visit(revenueTrakUrl);
    });
    //

    cy.get('.rtFirst > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get('[style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get('#FileExplorer1_grid_ctl00__0 > :nth-child(1) > .rfeFileExtension').click();
    cy.get('.rtFirst > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get('[style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click({ multiple: true });
    cy.getIframe('#myPDFIframe').should('have.length.greaterThan', 0);
    cy.get('.rtFirst > :nth-child(2) > :nth-child(2) > .rtMid > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(2) > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > .rtLI > .rtBot > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get('#FileExplorer1_grid_ctl00__0 > :nth-child(1) > .rfeFileExtension').click();
    cy.getIframe('#myPDFIframe').should('have.length.greaterThan', 0);
    cy.get('.rtFirst > :nth-child(2) > :nth-child(3) > .rtBot > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(3) > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(3) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > :nth-child(1) > .rtTop > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2) > [style="zoom: 1;"] > .rtUL > .rtLI > .rtBot > .rtIn > .rtTemplate > :nth-child(2)').click();
    cy.get('#FileExplorer1_grid_ctl00__0 > :nth-child(1) > .rfeFileExtension').click();
    cy.getIframe('#myPDFIframe').should('have.length.greaterThan', 0);
  });
});
