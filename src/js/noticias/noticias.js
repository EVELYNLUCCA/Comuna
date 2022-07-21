const abrir_noticias = document.getElementById('abrir_noticias');
const noticias_container = document.querySelector('.noticias_container');
const cerrar_noticias = document.getElementById('cerrar_noticias');
console.log(cerrar_noticias);

abrir_noticias.addEventListener('click', (e) => {
    noticias_container.style.animation = 'aparecer .55s ease-in';
    noticias_container.style.clipPath = 'circle(104.6% at 47% 48%)';
})

cerrar_noticias.addEventListener('click', (e) => {
    noticias_container.style.animation = 'desaparecer .55s ease-in';
    noticias_container.style.clipPath = 'circle(0.1% at 0 2%)';
})

/* slider */

const slider_container = document.querySelector('#slider_noticias');
const arrow_left = document.getElementById('left-arrow-noticias');
const arrow_right = document.getElementById('right-arrow-noticias');

let position_slider = 0;
const elementNodes = slider_container.childElementCount - 1;

arrow_left.addEventListener('click', (e) => {
    if(position_slider >= 0) {
        position_slider = elementNodes * -100;
    } else {
        position_slider += 100;
    }

    slider_container.style.left = `${position_slider}%`;
});

arrow_right.addEventListener('click', (e) => {
    if(position_slider <= (elementNodes * -100)){
        position_slider = 0;
    } else {
        position_slider -= 100;
    }
    console.log(position_slider);
    slider_container.style.left = `${position_slider}%`;
});