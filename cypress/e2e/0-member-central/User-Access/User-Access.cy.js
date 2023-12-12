Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})

describe("User-Access", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://uatmembercentral.renaissanceins.com";
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo222");
    /* ==== Generated with Cypress Studio ==== */

    const userAccessUrl = `${baseUrl}/UserAccess`;
    cy.request(userAccessUrl).then((response) => {
    expect(response.status).to.eq(200);
    cy.visit(userAccessUrl);

    //Add User details
    cy.get("#addUserModalBtn").click();
    cy.get("#FirstName").type("AutomationTest");
    cy.get("#LastName").type("AddUser");
    cy.get("#phoneNumber").type("123456789");
    cy.get("#nextBtn").click();
    cy.get('#Email-error').contains('The Email field is required.');
    cy.get('#UserTypeMessage').contains('The User Type field is required.');
    cy.get("#Email").type("AutomationTest@AddUser.com");
    cy.get("#UserType").select(2);
    cy.get("#nextBtn").click();

    //Add Agency
    cy.get('.k-toolbar > .k-button').click();
    cy.get('[data-container-for="AgencyName"] > .k-widget > .k-dropdown-wrap > .k-input').type("Renaissance Insurance Group, LLC");
    cy.get('[data-container-for="Division"] > .k-widget > .k-multiselect-wrap').click();
    cy.get('#Division_listbox > [data-offset-index="0"]').click();
    cy.get('[data-container-for="Department"] > .k-widget > .k-multiselect-wrap').click();
    cy.get('#Department_listbox > [data-offset-index="0"]').click();
    cy.get('[data-container-for="Branch"] > .k-widget > .k-multiselect-wrap').click();
    cy.get('#Branch_listbox > [data-offset-index="0"]').click();
    cy.get('a.k-button.k-button-icontext.k-primary.k-grid-update').click();
    cy.get("#nextBtn").click();
    cy.wait(1000);
    cy.get("#nextBtn").click();
    cy.wait(1000);
    
    //Add Permissions
    cy.get(':nth-child(1) > .tileDiv > :nth-child(3) > .row > .btn-group > :nth-child(11)').click();
    cy.get("#nextBtn").click();

    //Submit button
    cy.get('#addUserModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    //cy.get("#submitBtn").click();

    //Edit User button
    cy.get('.k-textbox > .k-input').type("AutomationTest").click();
    cy.wait(3000);
    cy.get('.k-grid-Edit').click();
    cy.wait(2000);
    cy.get('#addUserFormCarouselStep3').click();
    cy.get(':nth-child(1) > .tileDiv > :nth-child(8) > .row > .btn-group > :nth-child(11)').click();
    cy.get("#nextBtn").click();
    cy.get("#submitBtn").click();

    //Disable User button
    cy.get('.k-textbox > .k-input').type("AutomationTest");
    cy.wait(3000);
    cy.get('a.k-button.k-button-icontext.k-grid-Disable').click({force: true});
    cy.get('.k-button').contains('Cancel').click();
   
    //clone User button
    cy.get('a.k-button.k-button-icontext.k-grid-Clone').click({force: true});
    cy.get('#cancelBtn').click();

    //Welcome email
    cy.get('.k-grid-Email').click();
    cy.get('#confirmModalNoButton').click();

    //Inactive User
    //cy.get('.k-textbox > .k-input').type("AutomationTest").click();
    cy.wait(3000);
    cy.get('.k-grid-Edit').click();
    cy.wait(2000);
    cy.get('[value="Inactive"]').click();
    cy.get('#addUserFormCarouselStep5').click();
    //y.get("#nextBtn").click();
    //cy.get("#submitBtn").click();
 
      /* ==== End Cypress Studio ==== */
    //});
    /* ==== End Cypress Studio ==== */
  });
});
});
