const left2 = document.getElementById('left2');
const right2 = document.getElementById('right2');
const slider2 = document.querySelector('.slider_presentacion');

let posicion2 = 0;

left2.addEventListener('click', (e) => {
    posicion2 += 100;

    slider2.style.left = `${posicion2}%`;
});

right2.addEventListener('click', (e) => {
    posicion2 -= 100;

    slider2.style.left = `${posicion2}%`;
});

