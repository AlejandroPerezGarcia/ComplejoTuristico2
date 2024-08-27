const form = document.querySelector('form');

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const nombre = event.target.txtNombre.value;
    const email = event.target.txtEmail.value;
    const motivo = event.target.txtMotivo.value;
    const mensaje = event.target.txtMensaje.value;

    alert(`Su mensaje ha sido enviado, su respuesta llegará a ${email}`);

    console.log("enviado");

})

//style="width: 18rem;