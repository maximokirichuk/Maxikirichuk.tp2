// Obtener el formulario y el elemento de agradecimiento
const form = document.getElementById('form');


// Agregar un controlador de eventos para el envío del formulario
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const numero_cliente = document.getElementById('numero_cliente').value;
    const mensaje = document.getElementById('mensaje').value;

//Validaciones
if (nombre === "") {
    alert('Por favor, ingrese su nombre.');
    return; // Detiene el envío del formulario si el nombre está vacío
}
if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert('El nombre solo debe contener letras.');
    return; // Detiene el envío del formulario si el nombre contiene números u otros caracteres.
}
if (email === "") {
    alert('Por favor, ingrese su email.');
    return; // Detiene el envío del formulario si el nombre está vacío
}
if (numero_cliente === "") {
    alert('Por favor, ingrese su nombre.');
    return; // Detiene el envío del formulario si el nombre está vacío
}
if (isNaN (numero_cliente)) {
    alert('Por favor, ingrese bien su numero telefonico.');
    return; // Detiene el envío del formulario si el nombre está vacío
}

    console.log('El formulario ya se envio con los siguientes datos!!')
    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Número de Cliente:', numero_cliente)
    console.log('Mensaje:', mensaje)
    alert('Lo estaremos contactando en la brevedad');
});

