Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})
describe('Portico Market Match', () => {
  it('MarketMatch_mm', function() {
    cy.clearCookies();
    cy.visit('https://stagingmembercentral.renaissanceins.com/Home/MemberPortal');
    cy.get('#UserName').clear('RenAutoTester@gmail.com');
    cy.get('#UserName').type('RenAutoTester@gmail.com');
    cy.get('#Password').click();
    cy.get('#Password').clear('!!Cadillac50@');
    cy.get('#Password').type('!!Cadillac50@');
    cy.get('.btn').click();
    //cy.get(':nth-child(2) > .home-menu-items > :nth-child(3) > .btn > .button-text').click();
  
    cy.visit("https://stagingporticomarketmatch.renaissanceins.com/market-match/find-customer/search")
    cy.get('.search-field').clear('H');
    cy.get('.search-field').type('Hydro');
    cy.wait(2000);
 
    cy.get('.search-results > div > :nth-child(1)').click();//Selects the 2nd result
  //   cy.get('.search-results').contains('Hydro City').click();
  //To validate the NAICS code in the first page ( ClassCode Selection) and the NAICS code displayed in the next page
   let textFromFirstPage;
    cy.get(':nth-child(1) > .code-link-container > .code-text > .code-text-effects > .code').invoke('text').then((text) => {
      textFromFirstPage = text.trim();
    }); 
    //Extract the NAICS code from the text
    cy.get(':nth-child(1) > .code-link-container > .code-text > .code-text-effects > .code').invoke('text').then((text) => {
        textFromFirstPage = text.substring(6);
      });
    cy.get(':nth-child(1) > .code-link-container > .link > .view-carriers-button').click();
    // Validate the extracted NAICS Code appears  on the second page
    let textFromSecondPage;
    // cy.get('.heading-sub-text').invoke('text').then((text) => {textFromSecondPage = text.trim();
    // });
    cy.get('.heading-sub-text').invoke('text').then((textFromSecondPage) =>{
      expect(textFromSecondPage).to.include(textFromFirstPage);
    });
    // To veriry the Title is 'Potential Markets'
   cy.get('.page-title').contains("Potential Markets");
   //cy.get('.heading-sub-text').contains(textFromFirstPage);
    

    // cy.get(':nth-child(2) > .code-link-container > .link > .view-carriers-button').click();
    
    cy.get(':nth-child(1) > .dropdown-title > .arrow-down').click();
    cy.get('.search-filter').type('Farmowner{enter}');
    //cy.get(':nth-child() > .item > label').contains('Farm Owner').click();
    //cy.get('[name="selectlob"]').contains('Farmowner').check();
    cy.get('[for="checkbox0"]').click();
    // cy.get(':nth-child(1) > .dropdown-title > .arrow-down').click();
    cy.get('.search-filter').clear();
    cy.get(':nth-child(2) > .item').click();

    cy.get(':nth-child(2) > .dropdown-title').click();
    cy.get(':nth-child(6) > .item').click();
    
    // cy.get(':nth-child(2) > .dropdown-title').should('not.be.visible');
    cy.get(':nth-child(2) > .dropdown-title').contains("California");
    cy.get('.back').click();
    cy.get('.back').click();

    //  Search by Class code
    cy.get('.search-field-description').clear('2');
    cy.get('.search-field-description').type('236115');
    cy.get('.result').first().click({force:true});
    cy.get('.states-search-field').clear('m');
    cy.get('.states-search-field').type('mas');
    cy.get('.option').click();
    cy.get('.search-by-description-button').click();
    cy.get('.view-carriers-button').click();
    cy.wait(10000);
    //cy.get(':nth-child(1) > .carrier-header-section > .additional-info-field > .icon-section > .plus-minus-icon').click();
    cy.get(':nth-child(1) > .carrier-header-section > .icons-container > .icon-section__plus-minus > .plus-minus-icon').click();
    cy.get('.view-all-arrow').click();
    //cy.get('.carrier-item__expanded > .carrier-header-section > .additional-info-field > .icon-section > .plus-minus-icon').click();
    cy.get('.view-all-lobs-button > span').click();
    cy.get('.carrier-item__expanded > .carrier-header-section > .icons-container > .icon-section__plus-minus > .plus-minus-icon').click();
  });
})
