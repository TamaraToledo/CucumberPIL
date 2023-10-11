class FarmaLider {
  
  // Header
  getMenuAllButton() {
    return cy.get("nav#cbp-hrmenu");
  }

  getHeaderOptionMenu() {
    return cy.get('[id="cbp-hrmenu-tab-13"]');
  }

  getHeaderSubOptionMenu() {
    return cy.get('a.cbp-column-title.cbp-category-title');
  }
  getBtnIcon() {
    return cy.get("elementor-icon-box-wrapper");
  }

}

module.exports = new FarmaLider();