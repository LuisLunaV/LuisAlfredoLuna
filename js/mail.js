import { seccionContacto } from "./ventana-modal.js";
const inputNombre = document.querySelector("#nombre"),
  inputCorreo = document.querySelector("#correo"),
  txtComentario = document.querySelector("#comentario");

export const enviarCorreo = () => {
  seccionContacto.addEventListener("click", (event) => {
    // event.preventDefault();
    const evnviar = event.target.value;
    if (evnviar == "Enviar") {
      if (
        inputNombre.value != "" &&
        inputCorreo.value != "" &&
        txtComentario.value != ""
      ) {
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

        setTimeout(() => {
          inputNombre.value = "";
          inputCorreo.value = "";
          txtComentario.value = "";
        }, 1000);
      } else console.log("completa los campos");
    }
  });
};
