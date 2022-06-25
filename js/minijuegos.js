var btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
  juego1 = document.getElementById("botonF1"),
  ContJuego = document.getElementById("ContJuego"),
  VentanaJuego = document.getElementById("VentanaJuego");

juego1.addEventListener("click", function () {
  VentanaJuego.classList.add("active");
  ContJuego.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function () {
  VentanaJuego.classList.remove("active");
  ContJuego.classList.remove("active");
});
