// Archivo JS
// Variables
const imagenes = document.querySelectorAll(".imagen");
const botones = document.querySelectorAll(".boton");
let indice = 0;

// Funciones
// Función para cambiar la imagen activa
function cambiarImagen() {
    // Remover la clase activa de la imagen actual
    imagenes[indice].classList.remove("activa");
    // Remover la clase activa del botón actual
    botones[indice].classList.remove("activo");
    // Incrementar el índice o reiniciarlo si llega al final
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    // Agregar la clase activa a la nueva imagen
    imagenes[indice].classList.add("activa");
    // Agregar la clase activa al nuevo botón
    botones[indice].classList.add("activo");
}

// Función para cambiar la imagen según el botón presionado
function seleccionarImagen(e) {
    // Remover la clase activa de la imagen actual
    imagenes[indice].classList.remove("activa");
    // Remover la clase activa del botón actual
    botones[indice].classList.remove("activo");
    // Obtener el índice del botón presionado
    indice = e.target.dataset.imagen - 1;
    // Agregar la clase activa a la nueva imagen
    imagenes[indice].classList.add("activa");
    // Agregar la clase activa al nuevo botón
    botones[indice].classList.add("activo");
}

// Eventos
// Evento para cambiar la imagen cada 3 segundos
setInterval(cambiarImagen, 3000);

// Evento para cambiar la imagen al presionar un botón
botones.forEach(boton => {
    boton.addEventListener("click", seleccionarImagen);
});
