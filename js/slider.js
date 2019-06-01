//Cuando el documento este cargado entonces que cargue el código JavaScript
document.addEventListener("DOMContentLoaded", () => {

    //Agrego el evento a todas las flechas hacia la izquierda de los sliders
    document.querySelectorAll(".slider-container .left").forEach(leftArrow => {
        leftArrow.addEventListener("click", function() {
            const carrete = this.parentNode.children[1].children[0];
            let marginLeft = parseInt(carrete.style.marginLeft);

            if (isNaN(marginLeft)) {
                marginLeft = 0;
            }
            
            const nuevoMargen = marginLeft + 100;
            if (nuevoMargen >= -200 && nuevoMargen <= 0) {
                carrete.style.marginLeft = nuevoMargen + "%";
            }
        });
    });

    //Agrego el evento a todas las flechas hacia la derecha de los sliders
    document.querySelectorAll(".slider-container .right").forEach(rightArrow => {
        rightArrow.addEventListener("click", function () {
            const carrete = this.parentNode.children[1].children[0];
            let marginLeft = parseInt(carrete.style.marginLeft);

            if (isNaN(marginLeft)) {
                marginLeft = 0;
            }

            const nuevoMargen = marginLeft - 100;
            if (nuevoMargen >= -200 && nuevoMargen <= 0) {
                carrete.style.marginLeft = nuevoMargen + "%";
            }

        });
    });

});