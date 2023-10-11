import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`leo la siguiente tabla aplicando Hashes`, (tabla) => {
  tabla = tabla.hashes();

  cy.log(tabla);
  cy.log(tabla[1]);
  cy.log(tabla[1].num);
  cy.log(tabla[1].mes);
});

Then(`leo la siguiente tabla aplicando rows`, (tabla) => {
  tabla = tabla.rows();

  cy.log(tabla);
  cy.log(tabla[0]);
  cy.log(tabla[0][0]);
  cy.log(tabla[0][1]);
});

Then(`leo la siguiente tabla aplicando raw`, (tabla) => {
  tabla = tabla.raw();

  cy.log(tabla);
  cy.log(tabla[0]);
  cy.log(tabla[0][0]);
  cy.log(tabla[0][1]);
});

Then(`leo la siguiente tabla aplicando rawTable`, (tabla) => {
  tabla = tabla.rawTable;

  cy.log(tabla);
  cy.log(tabla[0]);
  cy.log(tabla[0][0]);
  cy.log(tabla[0][1]);
});

Then(`leo la siguiente tabla aplicando RowHashes`, (tabla) => {
  tabla = tabla.rowsHash();

  cy.log(JSON.stringify(tabla));
  cy.log(tabla["2"]);
});

Then(`leo la siguiente tabla con raw y aplico flat`, (tabla) => {
  tabla = tabla.raw();
  tabla = tabla.flat();
  cy.log(JSON.stringify(tabla));
});

Then(`leo la siguiente tabla con raw en 1 y aplico flat`, (tabla) => {
  tabla = tabla.rawTable[1];
  tabla = tabla.flat();
  cy.log(JSON.stringify(tabla));
});
