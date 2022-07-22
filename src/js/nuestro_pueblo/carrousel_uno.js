const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slider');

let posicion = 0;
const childs = slider.childElementCount - 1;

left.addEventListener('click', (e) => {
    if (posicion >= 0) {
        posicion = childs*-100;
    } else {
        posicion += 100;
    }

    slider.style.left = `${posicion}%`;
});

right.addEventListener('click', (e) => {
    if (posicion <= childs*-100) {
        posicion = 0;
    } else {
        posicion -= 100;
    }

    slider.style.left = `${posicion}%`;
});

