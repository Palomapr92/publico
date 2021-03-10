function onClick() {
  //Comprobamos que el navegador sea compatible con el uso de sessionStorage
  if(typeof(Storage) !== "undefined") {
    //En caso Positico
    if (sessionStorage.clickcount) {
      //En caso de que hagamos click, sumamos uno al contador
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      //En caso de que sea la primera vez que entramos en la pagina
      sessionStorage.clickcount = 1;
    }
    //Mostramos
    document.getElementById("contador").innerHTML = "Has visitado " + sessionStorage.clickcount + " pagina(s).";
  } else {
    //En caso negativo
    alert("Sorry, your browser does not support web storage...");
  }
}
