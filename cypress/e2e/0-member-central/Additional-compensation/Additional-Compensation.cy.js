Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})

//login to member central 
describe("InsuredPremiumPayments", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://uatmembercentral.renaissanceins.com";
    cy.login(`${baseUrl}`, "rentx1@renaissanceins.com", "June@ms22");
   


    
    cy.get(':nth-child(11) > .sidebar-top-link').click();
    // cy.get(':nth-child(11) > .sidebar-top-link')
    cy.wait(1000);
    //cy.get(':nth-child(11) > .sidebar-sublinks > :nth-child(1) > a').click();
    
//Go to New England Carrier information page 
    const userAccessUrl = `https://uatmembercentral.renaissanceins.com/RaisCarrierOfferings/Compensation?category=New%20England`;
    cy.request(userAccessUrl).then((response) => {
    expect(response.status).to.eq(200);
    cy.visit(userAccessUrl);
    cy.wait(1000);
  });
   
    cy.get('.strategic-carriers > .panel-body > .well > :nth-child(1)').click(); //show details for Strategic Carriers
    cy.get('#StrategicCarriersTable > .table-scroll > .carrier-details > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .Contract-Terms').click();//click contract terms 
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(5) > .Historical-Performance').click(); //Click Historical Performance
    cy.get('.strategic-carriers > .panel-body > .well > :nth-child(1)').click(); //hide details
    cy.get('.traditional-brokers > .panel-body > .well > :nth-child(1)').click();
    cy.get('.traditional-brokers > .panel-body > .well > :nth-child(1) > .glyphicon-chevron-up').click();
    cy.get('.traditional-brokers > .panel-heading > .panel-title > h2 > #ShowCarrierCompensationModal').click(); //Open Update Traditional brokers modal
    cy.get('.close').click(); //Close 
    cy.get('.traditional-carriers > .panel-body > .well > :nth-child(1)').click();
    cy.get('.traditional-carriers > .panel-body > .well > :nth-child(1)').click();
    cy.get('.strategic-brokers > .panel-heading > .panel-title > h2 > #ShowCarrierCompensationModal').click(); //Open Update Strategic brokers Modal
    cy.get('.close').click();
    
//Go to SouthEast Carrier information page 
    const userAccessUrl1 = `https://uatmembercentral.renaissanceins.com/RaisCarrierOfferings/Compensation?category=Southeast`;
    cy.request(userAccessUrl1).then((response) => {
    expect(response.status).to.eq(200);
    cy.visit(userAccessUrl1);
    cy.wait(1000);
  });
    
    cy.get('.text-center > #ShowCarrierCompensationModal').click(); //Open Update Strtegic carriers Modal
    cy.get('#pnlDiv > :nth-child(4)').click();
    cy.get('.accordion.active').click();
    cy.get('#pnlDiv > :nth-child(2)').click();
    cy.get('.accordion.active').click();
    cy.get('.close').click(); //close
    cy.get('.strategic-carriers > .panel-body > .well > :nth-child(1)').click(); //show details for Strategic carriers
    cy.get('.strategic-carriers > .panel-body > .well > :nth-child(1)').click(); //Hide details for Strategic carriers
    cy.get('.premier-carriers > .panel-body > .well > :nth-child(1)').click(); ///show details for Premier carriers
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .Contract-Terms').click(); //click on Contract terms
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(4) > .Historical-Performance').click(); //Click on historical performance
    cy.get('#PremierCarriersTable > .btn').click();
    cy.get('.traditional-brokers > .panel-heading > .panel-title > h2 > #ShowCarrierCompensationModal').click();
    cy.get('.close').click();
    cy.get('#ShoweditPanel').click(); // left side text/disclaimer update modal
    cy.get('.btn-danger').click(); //click on cancel button
    
//Go to Premium Finance information page 
    const userAccessUrl2 = `https://uatmembercentral.renaissanceins.com/PremiumFinance/PremiumFinancePartners`;
    cy.request(userAccessUrl2).then((response) => {
    expect(response.status).to.eq(200);
    cy.visit(userAccessUrl2);
    cy.wait(1000);

    //cy.get('.finance-back').click();
    });
  });
});