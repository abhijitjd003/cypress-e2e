var expect = chai.expect;

describe("Producer Code", () => {
  it("Main Test", () => {
    cy.clearCookies();
    const baseUrl = "https://stagingmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo22");
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo22");
    const producerCodeUrl = `${baseUrl}/ProducerCodeArena/`;
    cy.request(producerCodeUrl).then((response) => {
      cy.visit(producerCodeUrl);
    });
    cy.get(".k-textbox > .k-input").type("abbate");
    cy.wait(3000);
    cy.get("tbody tr").each(($tr, index) => {
      cy.wrap($tr)
        .find("td:nth-child(2)")
        .should("contain", "Abbate Insurance Associates, Inc.");
    });
    cy.get("#navbar")
      .should("be.visible")
      .then(() => {
        cy.get(".nav > :nth-child(2) > a").click();
      });
    cy.wait(3000);
    cy.get(".k-textbox > .k-input").type("Ace");
    // cy.get('tbody tr').each(($tr, index) => {
    //   cy.wrap($tr).find('td:nth-child(2)').should('have.length.greaterThan', 0);
    // });
    cy.get("#navbar")
    .should("be.visible")
    .then(() => {
      cy.get(".nav > :nth-child(3) > a").click();
    });

    cy.wait(3000);
    cy.get(".k-textbox > .k-input").type("abbate");
    // cy.get('#PCARaisAgencyListGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr').each(($tr, index) => {
    //      cy.wrap($tr).find('td:nth-child(1)').should('contain', 'Abbate Insurance Associates, Inc.');
    //    });
    // cy.get('#PCARaisAgencyListGrid > div.k-grid-content.k-auto-scrollable > table > tbody tr').each(($tr, index) => {
    //   cy.wrap($tr).find('td:nth-child(1)').should('contain', 'Abbate Insurance Associates, Inc.');
    // });
    cy.wait(3000);
    cy.get("#navbar")
    .should("be.visible")
    .then(() => {
      cy.get(".nav > :nth-child(4) > a").click();
    });

    cy.wait(3000);
    cy.get(".k-textbox > .k-input").clear();
    cy.get(".k-textbox > .k-input").type("cabot");
    cy.wait(3000);
    cy.get("tbody tr").each(($tr, index) => {
      cy.wrap($tr)
        .find("td:nth-child(3)")
        .should("contain", "Cabot Risk Strategies, LLC");
    });

    cy.wait(3000);
    cy.get(".nav > :nth-child(5) > a").click();
    cy.wait(3000);
    cy.get(".k-textbox > .k-input").type("gordon");
    cy.wait(3000);
    cy.get("tbody tr").each(($tr, index) => {
      cy.wrap($tr)
        .find("td:nth-child(2)")
        .should("contain", "Andrew G. Gordon, Inc.");
    });
    cy.wait(3000);
    cy.get('[onclick="NavigationMenuClick(this)"][href="#"] > a').click();
    cy.wait(3000);
    cy.get('[style="float:left;"] > .btn').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .col-sm-9 > .k-widget > .k-dropdown-wrap > .k-input').click({ multiple: true });
    cy.wait(3000);
    cy.get('.k-animation-container > #NewCodeAgencyDropDown-list > .k-list-scroller > #NewCodeAgencyDropDown_listbox > [data-offset-index="6"]').click();
    cy.wait(3000);
    
    cy.get(':nth-child(3) > .col-sm-9 > .k-widget > .k-dropdown-wrap > .k-input').click();
    cy.wait(3000);
    cy.get('[style="width: 419px; height: 206px; box-sizing: content-box; overflow: visible; display: block; position: absolute; top: 307.125px; z-index: 10002; left: 585.5px;"] > #NewCodeCarrierCompanyDropDown-list > .k-list-scroller > #NewCodeCarrierCompanyDropDown_listbox > [data-offset-index="2"]').click();
    cy.wrap(Math.floor(Math.random() * 1000000))
  .then(randomNumber => {
    const formattedNumber = randomNumber.toString().padStart(6, '0');
    cy.get('#NewProducerCodeText').type(formattedNumber);
  });
    cy.get('#NewCodeNotesText').type('test');
    cy.get('.modal-footer > .btn-info').click();
    
    cy.get('#NewCodeStatusLbl')
  .should('be.visible')
  .then(($div) => {
    cy.wrap($div)
      .invoke('text')
      .should('equal', 'Added successfully !!!');
  });

    cy.get
  });
});
