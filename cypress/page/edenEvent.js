class EdenEvent {
    //Locadores de eventos
    getEventTitle() {
      return cy.get(".fechas-funciones span").first();  //div first=.q0
    }
    //Fechas
    getEventMonth() {
      return cy.get(".fechas-funciones span").last();  //ultimo elemento.
    }
  
    //
    getEventDay() {
      return cy.get("#calendarDay");
    }
  
    getEventHour() {
      return cy.get("#calendarTime"); //#esId 
    }
  }
  
  module.exports = new EdenEvent();