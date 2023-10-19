Feature: Home FarmaLider

     Scenario: Verificar elementos del menú superior
        Given que un usuario está en la página de "Lider"
        Then visualiza en el header los botones de "CATEGORÍAS, OFERTAS, NOVEDADES, DERMOLIDER, DIABETES, NOSOTROS"
        

    Scenario: Verificar elemento categoría
        Given que un usuario está en la página de "Lider"
        When posiciona el mouse sobre "CATEGORÍAS"
        #Then se visualizan las opciones "MAMA Y BEBE, GIFT CARD, DERMOCOSMETICA, MAQUILLAJE, PERFUMES Y FRAGANCIAS,CUIDADO E HIGIENE PERSONAL, CUIDADO ORAL, CUIDADO DE LA SALUD, PREVENCIÓN COVID-19, NUTRICION, DIABETES, HOGAR"

    Scenario: Verificar comportamiento de los botones centrales

        Given que un usuario está en la página de "Lider"
        Then selecciona el boton "RECETAS ESTADO DE TRAMITE" se redirecciona a "https://farmaciaslider.com.ar/iniciar-sesion?redirect=module&module=ff_clientesEspeciales&action=recetas"
   
      Scenario: Verificar la pagina de Ofertas
        Given que un usuario está en la página de "Lider"
        When realiza scroll hasta "Suscribite a nuestro newsletter"
        Then selecciona la opción "Ofertas" se redirecciona a "https://farmaciaslider.com.ar/92-ofertas"
  

          Scenario: Test visual del header
          Given que un usuario está en la página de "Lider"
          Then se verifica que el elemento "nav.header-nav" posee los atributos
          |css-atribute | valor| log|
          | background | #d20f7c | fondo de color magenta |
          | color | #fff | letras de color blanco |
