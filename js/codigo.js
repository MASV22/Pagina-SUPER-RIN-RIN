var ifr = document.getElementById("video");

var btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  rinrin = document.getElementById("cajaHome"),
  tituloV = document.getElementById("tituloVideo");

overlay.classList.add("active");
popup.classList.add("active");

btnCerrarPopup.addEventListener("click", function () {
  ifr.parentNode.removeChild(ifr);
  popup.classList.remove("active");
  overlay.classList.remove("active");
  rinrin.classList.add("active");
  // window.addEventListener("scroll", function () {
  //   tituloV.classList.add("active");
  // });
});
