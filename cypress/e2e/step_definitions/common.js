import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario está en la página de {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.viewport("macbook-16");
  cy.visit(url);
});

Then (`se verifica que el elemento {string} posee los atributos`,(locator,tabla)=>{
  tabla = tabla.rows();
  tabla.forEach((element,$index)=>{
    cy.log (`El elemento de index ${$index} tiene el valor ${JSON.stringify(element)}`)
  });
  });



