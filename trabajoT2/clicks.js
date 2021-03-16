
if(typeof(Storage) !== "undefined") {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
  } else {
    sessionStorage.setItem("clickcount", 1);
  }
  if(sessionStorage.clickcount>1){
    $("#contador").text("Has visitado " + sessionStorage.clickcount + " páginas");
  }else{
    $("#contador").text("Has visitado " + sessionStorage.clickcount + " página");
  }
} else {
  document.getElementById("contador").innerHTML = "Sorry, your browser does not support web storage...";
}

$("#prueba").text(document.title);
