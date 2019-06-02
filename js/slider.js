//Cuando el documento este cargado entonces que cargue el código JavaScript
document.addEventListener("DOMContentLoaded", function() {

    //Obtengo todos los sliders
    var slider = document.getElementsByClassName("slider-container");

    //Se recorre cada slider
    for (let i = 0; i < slider.length; i++) {

        //Obtengo las flechas apuntando a la izquierda de cada slider
        var leftArrows = slider[i].getElementsByClassName("left");
        
        //Recorro cada una de esas flechas
        for (var j = 0; j < leftArrows.length; j++) {

            //A cada flecha le agrego un evento click
            leftArrows[i].addEventListener("click", function() {
                //Obtengo el carrete y obtengo su margen izquierdo y lo convierto a entero
                var carrete = this.parentNode.children[1].children[0];
                var marginLeft = parseInt(carrete.style.marginLeft);
                
                //Si no existe el margen entonces lo pongo en 0
                if (isNaN(marginLeft)) {
                    marginLeft = 0;
                }
                
                //Le agrego 100 px de margen al carrete para que pase a la siguiente imagen
                var nuevoMargen = marginLeft + 100;
                if (nuevoMargen >= -200 && nuevoMargen <= 0) {
                    carrete.style.marginLeft = nuevoMargen + "%";
                }
            });
        }
    
        //Obtengo las flechas apuntando a la derecha de cada slider
        var rightArrows = slider[i].getElementsByClassName("right");
    
        for (var j = 0; j < rightArrows.length; j++) {
            rightArrows[i].addEventListener("click", function() {
                var carrete = this.parentNode.children[1].children[0];
                var marginLeft = parseInt(carrete.style.marginLeft);
    
                if (isNaN(marginLeft)) {
                    marginLeft = 0;
                }
    
                var nuevoMargen = marginLeft - 100;
                if (nuevoMargen >= -200 && nuevoMargen <= 0) {
                    carrete.style.marginLeft = nuevoMargen + "%";
                }
            });
        }
        
    }
    


});