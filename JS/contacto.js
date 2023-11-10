// Obtener el formulario y el elemento de agradecimiento
const contacto_form = document.getElementById('contacto-form');


// Agregar un controlador de eventos para el envío del formulario
contacto_form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const numero_cliente = document.getElementById('numero_cliente').value;
    const mensaje = document.getElementById('mensaje').value;

    // Almacenar los datos en el almacenamiento local (localStorage)
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('mensaje', mensaje);

   // Validaciones
if (nombre === '') {
    alert('Por favor, ingrese su nombre.');
    nombreInput.focus();
    return; // Detiene el envío del formulario si el nombre está vacío
}

if (email === '' || !validateEmail(email)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    emailInput.focus();
    return; // Detiene el envío del formulario si el correo electrónico está vacío o no es válido
}

if (numeroCliente === '' || isNaN(numeroCliente)) {
    alert('Por favor, ingrese un número de cliente válido.');
    numeroClienteInput.focus();
    return; // Detiene el envío del formulario si el número de cliente está vacío o no es un número válido
}

if (mensaje === '') {
    alert('Por favor, ingrese un mensaje.');
    mensajeInput.focus();
    return; // Detiene el envío del formulario si el mensaje está vacío
}

// Almacenar los datos en el almacenamiento local (localStorage)
localStorage.setItem('nombre', nombre);
localStorage.setItem('email', email);
localStorage.setItem('mensaje', mensaje);


function validateEmail(email) {
// Esta función verifica si el correo electrónico tiene un formato válido
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const numeroClienteInput = document.getElementById('numero_cliente');
    const mensajeInput = document.getElementById('mensaje');

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Número de Cliente:', numeroCliente);
    console.log('Mensaje:', mensaje);
});