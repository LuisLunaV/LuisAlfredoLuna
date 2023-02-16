// import { enviarCorreo } from '../index.js';
export const mostrarFormulario =(modal)=>{

    modal.classList.remove("ocultar");
    modal.classList.add("mostrar");
  
    setTimeout(()=>{
      const form = document.querySelector(".formulario");
      form.classList.add("tranformY-0");
    },10);

    // enviarCorreo();
  }