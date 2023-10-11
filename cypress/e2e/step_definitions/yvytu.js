import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const yvytuHome = require("../../page/yvytupage");

Then(`visualiza en el header los botones {string}`, (list) => {
    list = list.split(", ");
     yvytuHome
     .getMenuAllButton()
        .each((btn, $inx) => {
          if ($inx != 0) {
            cy.wrap(btn).should("have.text", list[ $inx -1])
          }});
       });

Then (`se visualizan las imágenes {string} en el banner`, (imgList) => {
   imgList = imgList.split(", ");
   imgList.forEach((banner, inx) => {
   yvytuHome
   .getCurrentImageBanner()
   .should("have.class",`bg-[url('/public/images/header-gallery/${banner}.png')]`);
   yvytuHome
  .getImgButton().its("length").then((cantidad) => {
    if (cantidad != inx + 1) {
    yvytuHome
    .getImgButton().eq(inx + 1).click();cy.wait(1000);     
    }});
  });});


Then(`visualiza el link {string} redirecciona a {string}`, (btnName, link) => {
    yvytuHome
      .getGenericLink()
      .contains(btnName)
      .should("have.attr", "href", link);
  });
  

When (`el usuario hace scroll hasta {string}`, (scrollToTxt) => {
    cy.contains(scrollToTxt).scrollIntoView();
  });

Then(`se verifica que la cabaña {string} llamada {string} posee las siguientes caracteristicas {string}`,
    (num, nomCab, list) => {
      list = list.split(", "); // para listas usas split (convierte en array)
      yvytuHome.getCabTitle().eq(num - 1).should("contain.text", `Cabaña ${nomCab}`);
      yvytuHome.getItemContainer().eq(num - 1).find("span")//subcontenedor 
        .each((item, $inx) => {                             // si tengo un each, tengo un wrap
          cy.wrap(item).should("contain.text", list[$inx]);
        });
    }
  );


