const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');

let contadorRight = 0;


rightArrows.forEach(el => {

    el.addEventListener('click', (e) => {
        const carrousel = el.previousElementSibling;

        if(contadorRight < (carrousel.childElementCount - 1)){
            contadorRight++
        } else{
            contadorRight = 0;
        }

        carrousel.style.left = `-${contadorRight * 100}%`;
    })

})

leftArrows.forEach(el => {

    el.addEventListener('click', (e) => {
        const carrousel = el.nextElementSibling;
        
        if(contadorRight > 0){
            contadorRight--
        } else{
            contadorRight = parseInt(carrousel.childElementCount - 1);
        }

        carrousel.style.left = `-${contadorRight * 100}%`;
    })

})