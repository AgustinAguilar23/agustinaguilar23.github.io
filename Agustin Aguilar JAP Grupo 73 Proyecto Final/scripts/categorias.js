// JavaScript source code

document.addEventListener("DOMContentLoaded", function () {

    var listado = document.getElementById("listadojuegos");

    for (var i = 0; i < infoJuegos.length; i++) {
        listado.innerHTML = listado.innerHTML + "<div id='title1'><p>" + infoJuegos[i].titulo + "</p></div><div id='imagen'><img src=" + infoJuegos[i].imagen + " id=" + infoJuegos[i].fondo + " title=" + infoJuegos[i].title + "></div><div class='parrafo1'><p>" + infoJuegos[i].descripcion + "</p></div><form action=" + infoJuegos[i].comprar + " class='comprar'><input type='submit' value='COMPRAR' /></form>";

    };
});



