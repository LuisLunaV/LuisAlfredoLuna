import { htmlFormulario, mostrarFormulario, cerrarModal, enviarCorreo } from './index.js';

const seccionContacto      = document.querySelector(".mi-contacto"),
      ventanaDelFormulario = document.querySelector(".contenedor-modal");

const ventanaModal = () => {

  seccionContacto.addEventListener("click", (event) => {
  
    const btnMensaje = event.target.text;

    if (btnMensaje.trim() === "Mensaje") {
      
      //Agregamos el componente al modal
      htmlFormulario( );
      //Agragamos la clase mostrar al modal
      mostrarFormulario( ventanaDelFormulario );
      //Enviamos los mensajes
      enviarCorreo();
    }

    //Agregamos la clase ocultar
    cerrarModal( ventanaDelFormulario );

  });



  


};




export { ventanaModal, seccionContacto };
