//Cuando el documento este cargado entonces que cargue el código JavaScript
document.addEventListener("DOMContentLoaded", function(){

    //Abrir y cerrar el menú
    document.getElementById("burger-menu").addEventListener("click", function() {
        console.log(document.getElementsByTagName("nav")[0]);
        
        var elements= document.getElementsByTagName("nav")[0].children[1];

        if (elements.style.display == "flex") {
            elements.setAttribute("style", "display: none !important");
        }
        else {
            elements.setAttribute("style", "display: flex !important");            
        }
    });

    //Mostrar el menú siempre que se cambie el tamaño de la pantalla
    window.addEventListener("resize", function(e) {
        if (window.innerWidth > 1000) {
            document.getElementsByTagName("nav")[0].children[1].removeAttribute("style");
        }
    })

});