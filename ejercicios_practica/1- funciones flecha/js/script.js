"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todas las fuciones a continuación en funciones flecha
Verifique que en consola no figura ningún error en alguna de ellas

*/

console.log("Declaración de eventos");
const boton = document.querySelector("button");

boton.addEventListener("click", function() {
    boton.className = "btnClick";
});

boton.addEventListener("mouseout", function() {
    boton.className = "btnOut";
});

document.addEventListener('click',()=>console.log('Click'));

console.log("Declaración de función una función común");
function nombreCompleto(nombre, apellido) {
    const completo = nombre + "_" + apellido;
    return completo;
 }
console.log(nombreCompleto("Max", "Power"));
const nombreFlecha = (nombre,apellido) => nombre + apellido;
nombreCompleto = nombreFlecha("Max","Power");
console.log(nombreCompleto);


console.log("Declaración de función anónima");
const iniciales = function (nombre, apellido) {
    return nombre[0].toUpperCase() + "_" + apellido[0].toUpperCase();
}

console.log(iniciales("Jean", "Grey"));

/* 2 - Enunciado

Cree una función flecha que dentro recorra un bucle
e imprima cada valor dentro de la variable "colores"

La variable colores no deberá pasarse como parámetro,
sino que debe utilizarse como variable global.

*/

const colores = ["azul", "verde", "amarillo", "rojo"];

const funcionBucle = () => {for (const color of colores) {
   console.log(colores);
};
}
console.log(colores);
