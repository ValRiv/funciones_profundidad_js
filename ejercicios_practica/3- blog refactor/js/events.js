"use strict";
/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/
function addPostMouseEvents() {
const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", function () {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  });

  post.addEventListener("mouseout", function () {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  });
}
}

