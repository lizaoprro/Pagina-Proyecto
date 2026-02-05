// Mostrar sorpresa
function mostrarMensaje() {
    document.getElementById("sorpresa").classList.remove("hidden");
    document.getElementById("frases").classList.add("hidden");
    document.getElementById("frasesTitulo").classList.add("hidden"); // ocultar el título también
}


// Cambiar a la pantalla de la pregunta
function mostrarPregunta() {
    document.getElementById("sorpresa").classList.add("hidden");
    document.getElementById("pregunta").classList.remove("hidden");
    document.getElementById("frases").classList.add("hidden");
    document.getElementById("frasesTitulo").classList.add("hidden"); // ocultar el título aquí también
}


// Botón "Sí"
document.getElementById("siBtn").addEventListener("click", () => {
    document.getElementById("respuestaTexto").innerText =
        "Ya sabiaa jajaa :P";

    // Crear corazones flotando
    for (let i = 0; i < 20; i++) {
        crearCorazon();
    }
});

// Función para crear corazones
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerText = "❤️";

    // Posición aleatoria en pantalla
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = (window.innerHeight - 50) + "px";

    document.body.appendChild(corazon);

    // Borrar el corazón al terminar la animación
    setTimeout(() => {
        corazon.remove();
    }, 2000);
}

// Botón "No" que se escapa
document.getElementById("noBtn").addEventListener("mouseover", () => {
    const btn = document.getElementById("noBtn");

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    btn.style.transform = `translate(${x}px, ${y}px)`;
});
