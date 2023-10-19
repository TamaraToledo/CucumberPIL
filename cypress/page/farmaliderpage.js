class FarmaLider {
  
  // Header
  getMenuAllButton() {
    return cy.get("nav#cbp-hrmenu");
  }

  getHeaderOptionMenu() {
    return cy.get('[id="cbp-hrmenu-tab-13"]');
  }
  getBtnCentral() {
    return cy.get("h3.elementor-icon-box-title a");
  }
  getBtn() {
    return cy.get("a");
  }

}

module.exports = new FarmaLider();