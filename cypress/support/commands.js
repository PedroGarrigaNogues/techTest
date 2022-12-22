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

    loadLandingPage(){
      cy.visit(('https://www.iberia.com/'), {
        headers: {
          "Accept": "application/json, text/plain, */*",
          "User-Agent": "axios/1.2.1"
        }
      })
      cy.get('button')
      .contains('Aceptar todas las cookies',{timeout:5000})
      .click()
      .wait(1000)
    },
  
    destination(){
      cy.get('[data-move="parent-mobile"]',{timeout:5000}).eq(1)
      .click()
      .type('Barcelona{enter}')
    },

    date(){
      cy.get('label',{timeout:5000})
      .contains('Fecha ida')
      .type('2505202328052023')
    },

    passangers(){
      cy.get('button[name="flight_passengers"]',{timeout:5000}).click()
      .get('[data-focusin="data-focusin"]',{timeout:5000}).eq(14).click()
      .get('[data-focusin="data-focusin"]',{timeout:5000}).eq(20).click()
      .get('button[name="flight_passengers"]',{timeout:5000}).click()
    },

    go(){
      cy.get('[data-validate="origin-destiny"]',{timeout:5000})
      .click()
    },


      
      }
      
      module.exports = cypressCommands