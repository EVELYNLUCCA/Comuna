const activador = document.getElementById('tramites');
const submenu_container = document.getElementById('submenu_container');

let desplegado = false;

activador.addEventListener('click', (e) => {
    desplegado = !desplegado;
    console.log(desplegado);

    if (desplegado){
        setTimeout(() => {
            submenu_container.style.transition = 'bottom 1s';
        }, 500);
        submenu_container.style.bottom = '-110px';
        submenu_container.style.zIndex = '9999999999999999999';
    } else {
        setTimeout(() => {
            submenu_container.style.transition = 'bottom 0s';
        }, 400);
        submenu_container.style.bottom = '0px';
        submenu_container.style.zIndex = '-1';
    }
})