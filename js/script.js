//Cuando el documento este cargado entonces que cargue el código JavaScript
document.addEventListener("DOMContentLoaded", () => {

    //Abrir y cerrar el menú
    document.querySelector("#burger-menu").addEventListener("click", function() {
        const elements= document.querySelector("nav .elements");

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
            document.querySelector("nav .elements").removeAttribute("style");
        }
    })

});