// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', (url, email, password) => { 
    cy.visit(url);
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#UserName').clear();
    cy.get('#UserName').type(email);
    cy.get('#Password').clear();
    cy.get('#Password').type(password, {log: false});
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
});

Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe)
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
})

import 'cypress-file-upload';

Cypress.Commands.add('uploadFile', (fileName, fileType, selector) => {
  cy.get(selector).attachFile({ filePath: fileName, fileType });
});


/// <reference types="Cypress" />