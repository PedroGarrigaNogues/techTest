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
      .wait(2000)
    },
  
    defineFlight(){
      cy.get('[data-move="parent-mobile"]',{timeout:5000}).eq(1).click().type('Barcelona{enter}').wait(3000)
      cy.get('label',{timeout:5000}).contains('Fecha ida').type('2501202328012023')
      cy.get('button[name="flight_passengers"]',{timeout:5000}).click()
      cy.get('[data-focusin="data-focusin"]',{timeout:5000}).eq(14).click()
      cy.get('[data-focusin="data-focusin"]',{timeout:5000}).eq(20).click()
      cy.get('button[name="flight_passengers"]',{timeout:5000}).click()
      cy.get('[data-validate="origin-destiny"]',{timeout:5000}).click()

    },
    

//✓ El usuario selecciona un vuelo de ida al azar de la lista de resultados.
//✓ La tarifa seleccionada (Basic, Optima o Excelente) debe ser configurable.
//✓ El usuario selecciona un vuelo de vuelta al azar de la lista de resultados.
//✓ La tarifa seleccionada (Basic, Optima o Excelente) debe ser configurable.
//✓ El usuario hace click en “Continuar”.
      
      }
      
      module.exports = cypressCommands