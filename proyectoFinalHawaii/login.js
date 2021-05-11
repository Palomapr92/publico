
/* 
JavaScript / jQuery
web o pagina: Proyecto Final
autor: Manuel Carrillo
fecha: Abril de 2021
*/

function ingresarDatos(){
  if (typeof (Storage) !== "undefined") {
    // Almacena un valor usando el método setItem del objeto localStorage
    var nombre = document.forms["formulario-login"]["nombre-usuario"].value;
    sessionStorage.setItem("usuario", nombre);
  } else {
    alert("Este navegador no soporta web storage...");
  }
  window.location.replace("tradiciones.html");
  return false;
}

function comprobarUsuario(){
  if(sessionStorage.getItem("usuario").length>0){
    document.getElementById("mensaje").style.display="none";
    document.getElementById("contenido").style.display="block";
  }
}

window.onload=comprobarUsuario();

function leerXML() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://manuel4242.github.io/publico/proyectoweb/js/registrados.xml", true);
  xhr.send();
}

