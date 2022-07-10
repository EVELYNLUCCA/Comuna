const arrowLeft = document.getElementById('left');
const arrowRight = document.getElementById('right');
const slider = document.querySelector('.slider');

let positionSlider = 0;

const limit = -(slider.childElementCount -1) * 100;

arrowLeft.addEventListener('click', (e) => {
    positionSlider = positionSlider + 100;

    if (positionSlider > 0) {
        positionSlider = -(slider.childElementCount -1) * 100;
        slider.style.left = `${positionSlider}%`;
    } else {
        slider.style.left = `${positionSlider}%`;
    }  
});

arrowRight.addEventListener('click', (e) => {
    positionSlider = positionSlider - 100;

    if(positionSlider < limit){
        positionSlider = 0;
    }

    slider.style.left = `${positionSlider}%`;  
});