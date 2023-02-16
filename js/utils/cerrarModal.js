export const cerrarModal =( modal )=>{
    const cerrar = document.querySelector(".btn-cerrar");
     cerrar.addEventListener("click", () => {
       modal.classList.remove("mostrar");
       modal.classList.add("ocultar");
       form.classList.remove("tranformY-0");
     });
   }