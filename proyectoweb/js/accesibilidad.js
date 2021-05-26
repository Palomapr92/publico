function activarAccesibilidad(){
    $('p').css('font-size', '50px');

    $('#activarZoom').css('display', 'none');
    $('#desactivarZoom').css('display', 'inline');
}

function desactivarAccesibilidad(){
    location.reload();
   
}

