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

Then(`selecciona la opción {string} se redirecciona a {string}`, (btnName, link) => {
    FarmaLider.getBtnIcon().contains(btnName).should("have.attr", "href", link);
});

When(`realiza scroll hasta {string}`, (text) => {
    cy.contains(text).scrollIntoView();
});

 