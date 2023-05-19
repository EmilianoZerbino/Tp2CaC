function resumenClick() {
  var montoAAbonar = document.getElementById("inpCantidad").value * 200;
  if (validarCampos()) {
    montoAAbonar=aplicarDescuento(montoAAbonar);
    document.getElementById("lblMontoFinal").innerText = "Total a Pagar: $ " + montoAAbonar;
  }
}

function borrarClick() {
  limpiarLabelsError();
  document.getElementById("inpName").value = "";
  document.getElementById("inpApellido").value = "";
  document.getElementById("inpCorreo").value = "";
  document.getElementById("inpCantidad").value = "";
  document.getElementById("selCategoria").selectedIndex = 0;
  document.getElementById("lblMontoFinal").innerText = "Total a Pagar: $ ";
}

function aplicarDescuento(montoAAbonar) { 
    switch (document.getElementById("selCategoria").value) {
        case "1":
          montoAAbonar *= 0.2;
          break;
        case "2":
          montoAAbonar *= 0.5;
          break;
        case "3":
          montoAAbonar *= 0.85;
          break;
      }
      return montoAAbonar;
}

function validarCampos(){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
        document.getElementById("inpName").value == "" ||
        document.getElementById("inpApellido").value == "" ||
        document.getElementById("inpCorreo").value == "" ||
        document.getElementById("inpCantidad").value == "" ||
        document.getElementById("inpCantidad").value < 1 || document.getElementById("inpCantidad").value > 5 ||
        !regex.test(document.getElementById("inpCorreo").value)
      ) {
        limpiarLabelsError();
            if (document.getElementById("inpName").value == "") {
                document.getElementById("lblErrorName").innerText = "El campo Nombre no puede quedar vacio.";
            }
            if (document.getElementById("inpApellido").value == "") {
                document.getElementById("lblErrorApellido").innerText = "El campo Apellido no puede quedar vacio.";
            }
            if (document.getElementById("inpCorreo").value == "") {
                document.getElementById("lblErrorCorreo").innerText = "El campo Correo no puede quedar vacio.";
            }else if(!regex.test(document.getElementById("inpCorreo").value)){

                document.getElementById("lblErrorCorreo").innerText = "Debe ingresar un correo electronico válido.";
            }
            if (document.getElementById("inpCantidad").value == "") {
                document.getElementById("lblErrorCantidad").innerText = "El campo Cantidad no puede quedar vacio. ";
            }else if (document.getElementById("inpCantidad").value < 1 || document.getElementById("inpCantidad").value > 5) {
                document.getElementById("lblErrorCantidad").innerText = "El máximo de entradas a comprar por persona es de 5.";
            }
        return false;
      }
      else{
        limpiarLabelsError();
        return true;
      }
}

function limpiarLabelsError(){
    document.getElementById("lblErrorName").innerText = "";
    document.getElementById("lblErrorApellido").innerText = "";
    document.getElementById("lblErrorCorreo").innerText = "";
    document.getElementById("lblErrorCantidad").innerText = ""; 
}