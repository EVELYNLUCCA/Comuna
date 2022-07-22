import data from '../../nuestro_pueblo.json' assert { type: "json" };
const card = document.getElementById('card');
const wrapper = document.getElementById('wrapper');

const activadores = document.querySelectorAll('.select_picture');
console.log(activadores);

activadores.forEach(activador => {
    activador.addEventListener('click', (e) => {
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
    })
})