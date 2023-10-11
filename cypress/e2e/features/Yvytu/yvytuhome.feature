Feature: Home Yvytu
  @Yvytu
#tageo ayuda a organizar

  Scenario: Verificar elementos del menú superior
        Given que un usuario está en la página de "Yvytu"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
        
     Scenario: Verificar Imágenes del Banner Principal
        Given que un usuario está en la página de "Yvytu"
        Then se visualizan las imágenes "01, 02, 03, 04" en el banner
   
    Scenario: Verificar comportamiento del botón /reserva_yvytu
        Given que un usuario está en la página de "Yvytu"
        Then visualiza el link "/reserva_yvytu" redirecciona a "https://www.instagram.com/reserva_yvytu/"
        And visualiza el link "Reservar" redirecciona a "https://wa.me/5493757454400"
        And visualiza el link "Donar" redirecciona a "https://cafecito.app/reserva-yvytu"

    Scenario: Verificar cabañas
        Given que un usuario está en la página de "Yvytu"
        When el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "1" llamada "Yaguareté" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado"
        And se verifica que la cabaña "2" llamada "Arasari" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi"

    Scenario Outline: Verificar cabaña <num>: <nombreCab>
        Given que un usuario está en la página de "Yvytu"
        When el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "<num>" llamada "<nombreCab>" posee las siguientes caracteristicas "<item>"
        Examples:
            | num | nombreCab | item                                                                                     |
            | 1   | Yaguareté | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado |
            | 2   | Arasari   | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi                     |

    #Para scenario Outline no usar títulos hardcodeados, poner nombres idividuales.
    # al ser dos test individuales pueden fallar individualmente si bloquear el anterior.    
