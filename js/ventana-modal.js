const seccionContacto = document.querySelector(".mi-contacto"),
  form = document.querySelector(".formulario"),
  cerrar = document.querySelector(".btn-cerrar"),
  ventanaDelFormulario = document.querySelector(".contenedor-modal");

const ventanaModal = () => {
  seccionContacto.addEventListener("click", (event) => {
    const btnMensaje = event.target.text;

    if (btnMensaje.trim() === "Mensaje") {
      ventanaDelFormulario.classList.remove("ocultar");
      ventanaDelFormulario.classList.add("mostrar");

      form.classList.add("tranformY-0");
    }
  });

  cerrar.addEventListener("click", () => {
    ventanaDelFormulario.classList.remove("mostrar");
    ventanaDelFormulario.classList.add("ocultar");
    form.classList.remove("tranformY-0");
  });
};

export { ventanaModal, seccionContacto };
