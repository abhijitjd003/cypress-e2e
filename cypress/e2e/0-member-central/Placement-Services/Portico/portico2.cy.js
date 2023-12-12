Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from

  // failing the test

  return false
})
describe("Portico", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://stagingmembercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "RenAutoTester@gmail.com","!!Cadillac50@");
    cy.login(`${baseUrl}`, "RenAutoTester@gmail.com", "!!Cadillac50@");
    const submissionUrl = `${baseUrl}/RaisSubmission/SubmissionHome`;
    cy.request(submissionUrl).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(submissionUrl);
      cy.get("#btnNewSubmission").click();

      //case:1 To verify Customer Name, DBA fields are visible and enabled
      cy.get("#customerName").clear().should('be.visible').should('be.enabled');//
      cy.get("#customerName").type("Test");

      //case:2 To verify radio buttons for Submission Type and Business type are visible,enabled and unselected default
      cy.get("#DoingBusinessAs").clear().should('be.visible').should('be.enabled');//
      cy.get("#SubmissionType").should('be.visible').should('be.enabled');//
      cy.get('[type="radio"]').should('be.visible').should('not.be', 'clicked')//

      //case:3 To verify Submission Type and Business Type fields are mandatory  
      cy.get(".carousel-control-next").click();//
      cy.get(".alert-danger").contains("Field is required.")//
      //To verify Submission Type  field is mandatory
      cy.get('input[name="TypeOfBusiness"]').check();
      cy.get(".carousel-control-next").click();//
      cy.get(".alert-danger").contains("Field is required.")//

      cy.get("#SubmissionType").select("New");

      // case:4 To verify the text box is mandatory if answer is Yes for "IsNonRenewedCurrCarrier"
      cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
      cy.get(".carousel-control-next").click();

      cy.get('[data-slide="prev"]').click();//
      // case:4 To verify the text box is mandatory if answer is Yes for "IsNonRenewedCurrCarrier"
      cy.get('input[name="IsNonRenewedCurrCarrier"]').check("true");//
      cy.get(".carousel-control-next").click();//
      cy.get(".alert-danger").contains("Field is required.")//
      cy.get("#IsNonRenewedCurrCarrierReason").type("This is a test reason");//

      // case:4 To verify the Customer Name is mandatory 
      cy.get("#customerName").clear();
      cy.get(".carousel-control-next").click();//
      cy.get(".alert-danger").contains("Field is required.")//
      cy.get("#customerName").type("Test");
      cy.get(".carousel-control-next").click();//

      cy.wait(1000);
      //Case:5 Manual Submission
      cy.get(".k-select > .k-icon").click();
      cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
        .contains("Builders Risk")
        .click({ force: true });
      
        var futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 2); // 2 days from now
            
            // Extract the components (month,day,year)
            var year = futureDate.getFullYear();
            var month = String(futureDate.getMonth() + 1).padStart(2, "0");
            var day = String(futureDate.getDate()).padStart(2, "0");
          
            // Combine the components in "MM-DD-YYYY" format
            var formattedFutureDate = `${month}-${day}-${year}`;
      cy.get('input[name="LOBList.Items[0].EffectiveDate"]').clear(1);
      cy.get('input[name="LOBList.Items[0].EffectiveDate"]').invoke('val', formattedFutureDate);
      
      //Case:6 To verify the condition "Effective Date must be greater than or equal to Target Date"
      futureDate.setDate(futureDate.getDate() + 1); // 3 days from now
      var year = futureDate.getFullYear();
      var month = String(futureDate.getMonth() + 1).padStart(2, "0"); 
      var day = String(futureDate.getDate()).padStart(2, "0");
      formattedFutureDate = `${month}-${day}-${year}`;
      cy.get('input[name="LOBList.Items[0].TargetDate"]').clear(1);
      cy.get('input[name="LOBList.Items[0].TargetDate"]').invoke('val', formattedFutureDate);
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
      cy.get(".carousel-control-next").click();
      cy.get(".alert-danger").contains("Effective Date must be greater than or equal to Target Date");
      
      futureDate.setDate(futureDate.getDate() -3); //current date
      var year = futureDate.getFullYear();
      var month = String(futureDate.getMonth() + 1).padStart(2, "0"); 
      var day = String(futureDate.getDate()).padStart(2, "0");
      var formattedFutureDate = `${month}-${day}-${year}`;
      cy.get('input[name="LOBList.Items[0].TargetDate"]').clear(1);
      cy.get('input[name="LOBList.Items[0].TargetDate"]').invoke('val', formattedFutureDate);
      

      cy.get(".carousel-control-next").click();
      cy.wait(1000);

      //Case:7  Checking file upload functionality--files location: D:\VeARC\renmm3\Automation\cypress\fixtures
      cy.get('#AddDocument').click();
      cy.get('#NewDocumentType_3').select("Audit");//Document type Dropdown
  
      cy.get('#NewDocumentFile_3').click();//Choose file button
      //Verify that user can not upload a file larger than 20 MB in size.
      cy.get('#NewDocumentFile_3').attachFile('sample.pdf');//Uploads sample.pdf (50MB) file.
      cy.get('#validationError_3').contains("File Size should not be greater than 20MB.")

      //Verify that file name length is not > 99 characters
      cy.get('#NewDocumentFile_3').attachFile('sample1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.pdf');
      cy.get('#validationError_3').contains("File Name should not be longer than 99 characters")
      
      //Verify the above two conditions at a time.
      cy.get('#NewDocumentFile_3').attachFile('sampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.pdf');
      cy.get('#validationError_3').contains("File Size should not be greater than 20MB. File Name should not be longer than 99 characters")
      
      cy.get('#NewDocumentFile_3').attachFile('sample1.pdf');//uploading valid file
      cy.get(".carousel-control-next").click();

      cy.get("#AccountStory").clear().type("Hello");

      //Case:8 To verify the text box is mandatory if answer is Yes for "Have you submitted this to any other carrieres?" 
      cy.get('.active > .row > .col-md-offset-1 > :nth-child(1) > :nth-child(2) > label').click();//Answer as "Yes"
      cy.get('#IsAlreadySubmittedToCarrierList').click();
      cy.get('[data-slide="prev"]').click();
      cy.get(".carousel-control-next").click();

      //cy.get("#Submit").click();
      cy.get(".alert").contains("Field is required.")
      cy.get('#IsAlreadySubmittedToCarrierList').type("Travelers")
      //cy.get(".carousel-controls").click();
      cy.get("#Submit").click();
      //Manual Submission Completed

      // //portico 2nd case : Submittion through Semsee
      cy.get("#btnNewSubmission").click();
      cy.get("#customerName").clear();
      cy.get("#customerName").type("TestSemsee");
      cy.get("#DoingBusinessAs").clear().type("Testing Semsee");
      cy.get("#SubmissionType").select("New");
      cy.get('input[name="TypeOfBusiness"]').check("Commercial");
      cy.get('input[name="IsNonRenewedCurrCarrier"]').check();
      cy.get(".carousel-control-next").click();
      cy.get(".k-select > .k-icon").click();
      cy.get('#ddlLOB0_listbox > [data-offset-index="1"] > .k-input-text')
         .contains("Commercial Auto")
         .click({ force: true });//selects Rater eligible LOB
      cy.get(":nth-child(1) > .input-group > .input-group-addon").click();//selects current date
      cy.get(":nth-child(2) > .input-group > .input-group-addon > .glyphicon").click();//selects current date
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').clear("1");
      cy.get('input[name="LOBList.Items[0].TargetPremium"]').type("1000");
      cy.get('#IsSendToRater0').check();
      cy.get('#SubmitA').click();//clicks on Continue to Quote button
      cy.wait(2000)
      cy.get("#btnNewSubmission").click();
  
    });
  });
});

