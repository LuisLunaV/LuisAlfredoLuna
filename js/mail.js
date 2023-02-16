import { limpiarModal, mensajeDeEnviado, cerrarModal } from "./index.js";

const contenedorModal = document.querySelector(".contenedor-modal");


export const enviarCorreo = () => {

  const inputNombre   = document.querySelector("#nombre"),
        inputCorreo   = document.querySelector("#correo"),
        txtComentario = document.querySelector("#comentario"),
        btnEnviar     = document.querySelector('.btn-enviar-mensaje');

    
  btnEnviar.addEventListener("click", ( ) => {

      if (
        inputNombre.value   != "" &&
        inputCorreo.value   != "" &&
        inputCorreo.value.includes('@')&&
        txtComentario.value != "" 
         ){

        // Conecta con la API email.js y envia la informacion a su destino
        const btn = document.getElementById("button");

        document
          .getElementById("form")
          .addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Enviando...";

            const serviceID = "default_service";
            const templateID = "template_5ydqd2a";

            emailjs.sendForm(serviceID, templateID, this).then(
              () => {
                btn.value = "Enviar";
              },
              (err) => {
                btn.value = "Enviar";
                alert(JSON.stringify(err));
              }
            );
          });

        // Limpiamos las cajas y quitamos los elementos del form.
        setTimeout(() => {

          inputNombre.value   = "";
          inputCorreo.value   = "";
          txtComentario.value = "";
         
          limpiarModal( contenedorModal );

        }, 1000);

        // Ejecutamos la funcion de mensaje de enviado
        setTimeout(()=>{
          mensajeDeEnviado();
        },1500)
        
        setTimeout(()=>{
          contenedorModal.classList.remove('mostrar');
          contenedorModal.classList.add('ocultar');
        },6000)

      } else console.log("completa los campos");
    
  });

};

mensajeDeEnviado( );

