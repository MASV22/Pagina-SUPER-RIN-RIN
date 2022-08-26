/// arreglo para guardar cada dato ---------------------------

let arreglo = ["", "", ""];

//// Funciones que permite mover las imagenes y guardar su valor por medio de la id -----------------

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if (arreglo[parseInt(ev.target.id)] == "") {
    var data = ev.dataTransfer.getData("text");
    arreglo[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data));
    document.src = "assets/imgArg/ranuraOn.png";
  }

  ///// Condicion para verificar el orden correcto de la contraseña -------------------------

  if (arreglo[0] != "" && arreglo[0] != "" && arreglo[1] != "" && arreglo[2]) {
    if (
      (arreglo[0] == "R1" || arreglo[1] == "R1" || arreglo[2] == "R1") &&
      (arreglo[0] == "R2" || arreglo[1] == "R2" || arreglo[2] == "R2") &&
      (arreglo[0] == "R3" || arreglo[1] == "R3" || arreglo[2] == "R3")
    ) {
      location.href = "arg_winner.html";
    } else {
      location.href = "arg_lose.html";
    }
  }
}
