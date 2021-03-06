const activador = document.getElementById('tramites');
const submenu_container = document.getElementById('submenu_container');

let desplegado = false;

activador.addEventListener('click', (e) => {
    desplegado = !desplegado;
    console.log(desplegado);

    if (desplegado){
        submenu_container.style.animation = 'view-submenu .5s ease-out';
        submenu_container.style.bottom = '-110px';
        submenu_container.style.zIndex = '99';
    } else {
        submenu_container.style.animation = 'animation-submenu .5s ease-in';
        submenu_container.style.bottom = '0px';
        submenu_container.style.zIndex = '-1';
    }
})

/* ----NAV----- */

const activadorNav = document.getElementById('menu_activador');
const navigation = document.getElementById('navigation')

activadorNav.addEventListener('click', (e) => {
    navigation.style.right = '0';
})

document.getElementById('menu_desactivador').addEventListener('click', (e) => {
    navigation.style.right = '-50%';
})