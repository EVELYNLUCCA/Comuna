import data from '../../servicios.json' assert { type: "json" };

console.log(data);
console.log(data);

const container = document.querySelector('main');

data.forEach(el => {
    const card = `
    <div class="card">
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
