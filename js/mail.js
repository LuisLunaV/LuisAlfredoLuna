import { seccionContacto } from "./ventana-modal.js";
const inputNombre   = document.querySelector("#nombre"),
      inputCorreo   = document.querySelector("#correo"),
      txtComentario = document.querySelector("#comentario"),
      contenedorModal = document.querySelector('.contenedor-modal');

export const enviarCorreo = () => {

  seccionContacto.addEventListener("click", (event) => {

    const enviar = event.target.value;
    
    if ( enviar == "Enviar") {

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
          do{

            contenedorModal.removeChild( contenedorModal.firstElementChild);
            console.log('borrado')
          }while(contenedorModal.firstElementChild)


        }, 1000);

        // Ejecutamos la funcion de mensaje de enviado
        setTimeout(()=>{
          mensajeDeEnviado();
        },1500)
        
        //Recargamos la pagina
        setTimeout(()=>{
          location.reload()
        },6000)

      } else console.log("completa los campos");
    }
  });
};


//Agregamos la imagen lottie al contenedor modal.
//Aviso visual de mensaje enviado
const mensajeDeEnviado=()=>{

  const html = `    <lottie-player
  src="https://assets1.lottiefiles.com/packages/lf20_2njvpkre.json"
  background="transparent"
  speed="1"
  autoplay
></lottie-player>
`;

contenedorModal.innerHTML += html;

};