import { htmlFormulario, mostrarFormulario, cerrarModal, enviarCorreo } from './index.js';

const seccionContacto      = document.querySelector(".mi-contacto"),
      ventanaDelFormulario = document.querySelector(".contenedor-modal");

const ventanaModal = () => {

  seccionContacto.addEventListener("click", (event) => {
  
    /**Recorremos los elementos desde donde dimos 'click', hasta encontrar
     * el nodo con el selector especificado.
     */
    const btnMensaje = event.target.closest('.btn-mensaje');
    
    if (btnMensaje) {     
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
