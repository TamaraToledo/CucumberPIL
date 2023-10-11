class Eden {  //los nombres de las class siempre van con mayúscula
    getSearchInput() {
      return cy.get("#espectaculoList"); // es su id #maselemento
    }
  
    getSearchSuggestions() {                              // apretar response en cypress para encontrar un localizador 
      return cy.get('ul.ui-autocomplete [id^="ui-id-"]'); //^me permite centrarme en los primeros elementos.
    }                                                     //ul.ui-autocomplete:ul.ui(elemento padre) con clase .autocomplete (dejo un espacio= busca elemento hijo)
  
    getNavBarBtn() {
      return cy.get(".navbar-menu");
    }
  
    getEventBlock() {
      return cy.get(".fechas-funciones");
    }
  
    getVerBtn() {
      return cy.get(".contenido-todos-ver-funcion");
    }
  
    getEventPrice() {
      return cy.get('[class="col-12 mb-1"]');
    }
  
    getEventUbicacion() {
      return cy.get('tbody [class="col-12"]');
    }
  }
  
  module.exports = new Eden(); // exporta los metodos.