const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slider');

let posicion = 0;

left.addEventListener('click', (e) => {
    posicion += 100;

    slider.style.left = `${posicion}%`;
});

right.addEventListener('click', (e) => {
    posicion -= 100;

    slider.style.left = `${posicion}%`;
});

