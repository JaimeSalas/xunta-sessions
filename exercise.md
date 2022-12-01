# Hangman

## Reglas del Juego

* Las palabras serán en Ingles para evitar, caracteres de mayor dificultad de codificación. 

El usuario debe adivinar una palabra secreta, previamente seleccionada. Para ello dispone de un número limitado de intentos, para conseguirlo. En cada ronda el usuario selecciona una letra del alfabeto, si la letra se encuentra en la palabra está se muestra en la posición en la que se encuentre dentro de la palabra; si por contra la letra seleccionada por el usuario no se encuentra en la palabra habrá gastado un intento.

Si el usuario adivina la palabra dentro del límite de intentos habrá ganado la partida. Si el usuario  gasta todos los intentos antes de adivinar la palabra habrá perdido.

## Issues

1. Crear un servicio que devuelva una palabra aleatoria en Ingles. Utilizar el [paquete random-words](https://www.npmjs.com/package/random-words), para simplificar la tarea. √
2. Crear un componente, que sirve de `placeholder` para una letra de la palabra secreta (sólo de lectura). √
3. Crear un componente que genere tantos componentes `placehloder` como letras tenga la palabra (sólo de lectura). √
4. Crear un componente que permita introducir una nueva letra como intento. √
5. Crear un componente que refleje el número de intentos gastado. √
6. Mostrar la letra en el `placeholoder` correspondiente si el usuario acerto. √
7. Crear una página de configuración de juego donde el usuario pueda introducir el número de intentos. √
8. Crear una página de menú, que permita navegar directamente al juego o a la configuración del mismo.
    * Implementar un router
    * La ruta pppal debe ser el menú 
9. Consumir la configuración del juego al iniciar una nueva partida.
10. Permitir que el usuario reinicie el juego desde la pantalla del juego.
11. Crear un histórico de partidas que se muestre en la pantalla de configuración.