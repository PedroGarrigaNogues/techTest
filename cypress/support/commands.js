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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypressCommands = {

    iNavigateToGoogle(){
      cy.visit('https://www.google.es/')
      .get('button')
      .contains('Aceptar todo')
      .click()
    },
  
    whenISearchForDogs(){
      cy.get('input',{timeout:5000}).eq(0)
      .type('dogs')
      .type('{enter}');
    },
    
      
      }
      
      module.exports = cypressCommands