
/* 
JavaScript / jQuery
web o pagina: Proyecto Final
autor: Paloma Perez Reyes
fecha: Mayo de 2021
*/



function comprobarUsuario(){
  if(sessionStorage.getItem("usuario").length>0){
    document.getElementById("mensaje").style.display="none";
    prueba()
  }
}

function prueba(){
  if(sessionStorage.getItem("usuario").length>0){
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
  xhr.open("GET", "https://palomapr92.github.io/publico/proyectoweb/registrados.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var nombre = document.forms["formulario-login"]["nombre-usuario"].value;
  var contraseña = document.forms["formulario-login"]["contraseña-usuario"].value;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  comprobacion = false;

  for (i = 0; i < x.length; i++) {
    if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombre) {
      if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == contraseña) {
        comprobacion = true;
        break;
      }
    }
  }

  if (comprobacion == true) {
    sessionStorage.setItem("usuario", nombre);
    window.location.replace("tradiciones.html");
  } else {
    window.alert("Usuario o contraseña incorrectos");
  }
}

/**
 * Funcion que amplia las letras
 */
