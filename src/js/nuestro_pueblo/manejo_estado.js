import data from '../../nuestro_pueblo.json' assert { type: "json" };
const card = document.getElementById('card');
const wrapper = document.getElementById('wrapper');
const card_container = document.getElementById('card_container');
const imagesSlider = document.querySelector('.images_slider');

const activadores = document.querySelectorAll('.select_picture');

activadores.forEach(activador => {
    activador.addEventListener('click', (e) => {
        card_container.style.animation = 'desappear 1.2s ease-out';

        setTimeout(() => {
            const filtro = data.filter(el => el.id === e.target.id)[0];
        
            card.innerHTML = `
                <img src="${filtro.imagenPrincipal}" alt="${filtro.id}">
                <div class="text">
                    <h2>${filtro.titulo}</h2>
                    <p>${filtro.descripción}</p>
                </div>
                <div class="border" style="background: ${filtro.color}"></div>
            `;
    
            wrapper.innerHTML = '';
    
            filtro.imagenesMuestra.forEach((el, index) => {
                const elementHtml = `
                    <input type="radio" name="image-slide" checked="checked">
                    <picture>
                        <img src="${el}" alt="${filtro.id + ' image ' + index}">
                    </picture>
                `;
    
                wrapper.innerHTML += elementHtml;
            });   
            
            card_container.style.animation = 'appear 1.2s ease-out';
        }, 1000);

    })
})

/* --------------AUTORIDADES---------------- */

const activadoresAutoridades = document.querySelectorAll('.activador');

activadoresAutoridades.forEach(el => {
    el.addEventListener('click', (e) => {
        el.nextElementSibling.classList.toggle('active');
    })
})

