const data = {
    club: {
        imgs: [
            {
                url: './src/images/club Sportivo Roca/club.jpg',
                description: 'FOTO DEL FRENTE DEL CLUB'
            },
            {
                url: './src/images/club Sportivo Roca/campeonas1980.jpg',
                description: 'EQUIPO CAMPEÓN 1980'
            },
            {
                url: './src/images/club Sportivo Roca/cancha.jpg',
                description: 'CANCHA'
            }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis est beatae dolorem, temporibus earum asperiores maxime iusto molestiae numquam quia molestias aliquam tempore error laboriosam? Dignissimos libero odit ut iusto, eligendi rem adipisci vero perspiciatis, officiis a ratione aperiam, voluptatem accusamus nobis. Similique sapiente,'
    },
    plaza: {
        imgs: [
            {
                url: './src/images/plaza/plaza_frente.jpg',
                description: 'FRENTE PLAZA'
            },
            {
                url: './src/images/plaza_canteros/arreglo.jpg',
                description: 'CANTEROS PLAZA'
            },
            {
                url: './src/images/plaza_juegos/plaza_juegos.jpg',
                description: 'JUEGOS PLAZA'
            }
        ],
        description: 'Lorem <img src="./src/images/plaza/plaza_frente.jpg" alt="frente de plaza"/> ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis est beatae dolorem, temporibus earum asperiores maxime iusto molestiae numquam quia molestias aliquam tempore error laboriosam? Dignissimos libero odit ut iusto, eligendi rem adipisci vero perspiciatis, officiis a ratione aperiam, voluptatem accusamus nobis. Similique sapiente,22222222'
    }
};

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