class FarmaLider {
  
  // Header
  getMenuAllButton() {
    return cy.get("nav#cbp-hrmenu");
  }

  getHeaderOptionMenu() {
    return cy.get('[id="cbp-hrmenu-tab-13"]');
  }
  getBtnIcon() {
    return cy.get("elementor-icon-box-wrapper");
  }

}

module.exports = new FarmaLider();