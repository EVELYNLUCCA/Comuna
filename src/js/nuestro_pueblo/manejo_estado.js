

const activadores = document.querySelectorAll('.select_picture');
const slider_container = document.querySelector('.slider_presentacion');
const text_description = document.getElementById('text_descripcion');

console.log(activadores);

activadores.forEach(imagen => {
    imagen.addEventListener('click', (e) => {
        const object = data[imagen.id];
        console.log(object);
        slider_container.innerHTML = '';

        object.imgs.forEach(el => {
            const newPresentacion = `
            <div class="presentacion">
                <h2>${el.description}</h2>
                <img src="${el.url}" alt="frente de plaza">
            </div>
            `;

            slider_container.innerHTML += newPresentacion;
        });

        text_description.innerHTML = `${object.description}`;
    })
})