describe("GrowthTrak", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://stagingmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo22");
    cy.login(`${baseUrl}`, "MMTestExt1@MM.com","@MMRodeo22");
    /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(1) > .home-menu-items > :nth-child(1) > .btn > .button-text').click();
    cy.visit("https://stagingporticomarketmatch.renaissanceins.com/market-match/find-customer/search");
    

    cy.get('.search-field').clear('h');
    cy.get('.search-field').type('hydro');
    cy.get('.search-results > div > :nth-child(1)').click();
    cy.get('.view-carriers-button').click();
    cy.get(':nth-child(1) > .dropdown-title > .arrow-down').click();
    cy.get(':nth-child(7) > .item > label').click();
    cy.get('#checkbox4',{ timeout: 10000 }).check({force: true});
    cy.get(':nth-child(2) > .dropdown-title').click();
    cy.get(':nth-child(6) > .item').click();
  
    cy.get('.back').click();
    cy.get('.back').click();
    cy.get('.search-field').type('totto\'s illi');
    cy.get('.result > span').click({force:true});
    cy.get('.view-carriers-button').click();
    cy.get('.carrier-item').should('have.text', 'Limited data for Marketing Consulting Services - 541613 given existing filters. Please change filter settings to see results')
    cy.get('.back').click();
    cy.get('.back').click({force:true});
    cy.get('.search-field-description').clear('2');
    cy.get('.search-field-description').type('236115');
    cy.get('.result').first().click({force:true});
    cy.get('.states-search-field').clear('m');
    cy.get('.states-search-field').type('mas');
    cy.get('.option').click();
    cy.get('.search-by-description-button').click();
    cy.get('.view-carriers-button').click();
    cy.get(':nth-child(1) > .carrier-header-section > .additional-info-field > .icon-section > .plus-minus-icon').click();
    cy.get('.view-all-arrow').click();
    cy.get('.carrier-item__expanded > .carrier-header-section > .additional-info-field > .icon-section > .plus-minus-icon').click();
  });
});
