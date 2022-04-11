# Evaluación final - Módulo 2 - Gema Mesas Velázquez

## Instrucciones del repositorio

- Clona o descarga este repositorio en tu ordenador.
- Escribe el comando "npm start" en tu consola para ver el proyecto.
- También puedes ver el proyecto actualizado en GitHub Pages [con este link.](http://beta.adalab.es/modulo-2-evaluacion-final-GemaMesasV/)

## Tareas a realizar

- Enunciado:

El ejercicio consiste en desarrollar una aplicación web que contiene un listado de las bebidas y cócteles de
todo el mundo, que nos permite des/marcar las bebidas como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass.

1- Estructura básica

- Un campo de texto y un botón para buscar un cóctel por su título.

- Un listado de resultados de búsqueda donde aparece la imagen del cóctel y el nombre.

2- Finalidad de la web:

- Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de TheCocktailDB.

- Para construir la URL de búsqueda hay que recoger el texto que ha introducido la usuaria en el campo de búsqueda.

- Por cada cóctel contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen del cóctel y el nombre.

- Algunos de los cócteles que devuelve el API no tienen imagen. En ese caso hay que mostrar una imagen de relleno. Esta imagen será generada con el servicio de placeholder.com.

- Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML o manipulando de forma avanzada el DOM.

3- Sección de favoritos:

- Al hacer clic en un coctel el color de fondo y el de fuente se intercambian, indicando que es un cóctel favorito.

- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con los cócteles favoritos.

- Los cócteles favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

4- Almacenamiento local:

- Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos debe mostrarse.

5- Bonus:

- Borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.

- Poder añadir/quitar como favorito al hacer clic sobre un cóctel del lado de la derecha y que si realizamos una nueva búsqueda y sale un cóctel que ya es favorito, aparezca ya resaltado en los resultados de búsqueda (con colores de fondo y texto
  intercambiados).

- Al final de la lista de favoritos habrá un botón para borrar todos los favoritos a la vez.

6- Bonus propio:

- Poder buscar los cócteles pulsando el botón "Enter" en el teclado.

## Herramientas utilizadas:

- Visual Studio Code: HTML (en partials) y SASS.

- Web Starter Kit de Adalab

- JavaScript
