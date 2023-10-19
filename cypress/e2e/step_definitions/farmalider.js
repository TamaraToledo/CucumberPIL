import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const FarmaLider = require("../../page/farmaliderpage");

Then(`visualiza en el header los botones de {string}`, (list) => {
    list = list.split(", ");
    FarmaLider.getMenuAllButton().each(($btn, index) => {
        if (index !== 0) {
            cy.wrap($btn).should("have.text", list[index]);
        }
    });
});

When(`posiciona el mouse sobre {string}`, (option) => {
    FarmaLider.getHeaderOptionMenu().contains(option).trigger('mouseover');
});

Then(`selecciona el boton {string} se redirecciona a {string}`, (btnTexto, url) => {
    FarmaLider.getBtnCentral().contains(btnTexto).click();
     cy.url().should('eq', url);
  });

Then(`selecciona la opción {string} se redirecciona a {string}`, (btnName, link) => {
    FarmaLider.getBtn().contains(btnName).should("have.attr", "href", link);
});

When(`realiza scroll hasta {string}`, (text) => {
    cy.contains(text).scrollIntoView();
});

 