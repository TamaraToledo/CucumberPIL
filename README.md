# CucumberPIL
Test básico con Cypress en cucumber.
Test de Cypress con Cucumber para el proyecto PIL.

## Configuración

### Requisitos Previos

Tener instalado Node js 

### Dependencias
@badeball/cypress-cucumber-preprocessor: ^18.0.6
@bahmutov/cypress-esbuild-preprocessor: ^2.2.0
cypress: ^13.3.0
cypress-image-diff-js: ^1.31.0
cypress-real-events: ^1.10.3
multiple-cucumber-html-reporter: ^3.5.0

### Scripts Disponibles
cypress:run:yvytu: Ejecuta los tests específicos para el escenario yvytu.
cypress:run:todos: Ejecuta todos los tests excepto los marcados como ignorados.
generate:report: Genera un reporte HTML de los resultados de los tests.

### Reportes:

Reporte HTML: reports/cucumber-report.html
Archivo de mensajes: reports/messages.ndjson
Archivo JSON de log: reports/log.json

Para que se genere el reporte con el comando "generate:report" , se debe tener el archivo "cucumber-json-formatter-64.exe" en la carpeta raiz.
El mismo se puede descarta de :https://github.com/cucumber/json-formatter/releases/tag/v19.0.0


### Autor
Tamara Toledo

