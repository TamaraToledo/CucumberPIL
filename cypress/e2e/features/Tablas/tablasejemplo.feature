Feature: Ejemplo de Uso de Tablas

    Scenario: Ejemplo de Uso de Hashes
        Then leo la siguiente tabla aplicando Hashes
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |
    #hashes() transforma la tabla en un array con múltiples objetos. Cada elemento del array es un objeto de ?key?: ?value?.

    Scenario: Ejemplo de Uso de rows
        Then leo la siguiente tabla aplicando rows
            | tech     | uso             |
            | cypress  | e2e - servicios |
            | selenium | varios          |
    #rows() transforma la tabla en un array con múltiples arrays (uno por cada fila), ignorando la primera fila, que se asume que es la cabecera de la tabla.

    Scenario: Ejemplo de Uso de raw
        Then leo la siguiente tabla aplicando raw
            | tech     | uso             |
            | cypress  | e2e - servicios |
            | selenium | varios          |
    #raw() transforma la tabla en un array con múltiples arrays (uno por cada fila).

    Scenario: Ejemplo de Uso de rawTable
        Then leo la siguiente tabla aplicando rawTable
            | tech     | uso             |
            | cypress  | e2e - servicios |
            | selenium | varios          |
    #rawTable = raw

    Scenario: Ejemplo de Uso de RowHashes
        Then leo la siguiente tabla aplicando RowHashes
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |
    #rowsHas() transforma la tabla en un objeto donde el valor de la primera columna es el ?key? y el valor de la segunda columna es el ?value?.
    #Solo funciona en tablas de 2 columnas.


    Scenario: Ejemplo de uso de flat
        Then leo la siguiente tabla con raw y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |
    #flat() permite transformar un array de arrays en un único array. Los unifica.

    Scenario: Ejemplo de uso de flat en 1
        Then leo la siguiente tabla con raw en 1 y aplico flat
            | tech     | uso             |
            | cypress  | e2e - servicios |
            | selenium | varios          |
#flat en 1 para un solo elemento
