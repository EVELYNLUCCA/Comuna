const inputsNombre = document.querySelectorAll(".inputNombre");
const inputMail = document.getElementById("mail");
const inputTelefono = document.getElementById("tel");
const inputNombreSolo = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');

const validarNombre=/^[a-z ,.'-]+$/i;
const validarMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validarTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

inputsNombre.forEach(element => {
    element.addEventListener("keyup",(e) =>{
        if (validarNombre.test(e.target.value)) {
            e.target.style.outline= '1px solid green';
        } else {
            e.target.style.outline= '1px solid red';
        }
    })
})

inputMail.addEventListener("keyup",(e) => {
        if (validarMail.test(e.target.value)) {
            e.target.style.outline= '1px solid green';
        } else {
            e.target.style.outline= '1px solid red';
        }
})

inputTelefono.addEventListener('keyup',(e)=>{
    console.log(e.target.value);

    if (validarTel.test(e.target.value)) {
        e.target.style.outline='1px solid green';
    } else {
        e.target.style.outline='1px solid red'
    }
})
const validarForm = document.getElementById('boton');

validarForm.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(validarForm);

    if (validarNombre.test(inputNombreSolo.value) &&  validarNombre.test(inputApellido.value) &&  validarMail.test(inputMail.value) &&  validarTel.test(inputTelefono.value) ){
        const form = document.getElementById('form');
        form.submit();
    } else {
        alert('Campos incorrectos');
    }
});