import data from '../../servicios.json' assert { type: "json" };

const container = document.querySelector('.container');

data.forEach(el => {
    
    const card = `
    <div class="card mix ${el.category} ${el.category2 ? el.category2 : ''}">
        <div class="img">
            <img src="${el.imageUrl}" alt="${el.name + 'image'}">
        </div>

        <div class="text">
            <h2>${el.title}</h2>

            <p>${el.description}</p>
        </div>
    </div>
    `

    container.innerHTML += card;
});

mixitup(".container");