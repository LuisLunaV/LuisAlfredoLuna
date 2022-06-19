const seccionContacto           = document.querySelector('.mi-contacto'),
      form                      = document.querySelector('.formulario'),
      cerrar                    = document.querySelector('.btn-cerrar'),
      ventanaDelFormulario      = document.querySelector('.contenedor-modal');

const ventanaModal =()=>{

    seccionContacto.addEventListener('click', ( event )=>{
       
        const btnMensaje = event.target.text,
        btnCerrar  = event.composedPath()[0].id;
             
 
        if( btnMensaje != undefined ){

            if(btnMensaje.trim() === 'Mensaje'){
                ventanaDelFormulario.classList.add('ventana-completa');
                cerrar.classList.remove('scale-down-center');
                cerrar.classList.remove('no-visible');
                form.classList.remove('scale-down-center');
                form.classList.add('scale-up-center');

            }
        };
    

        if( btnCerrar === 'X'){
            ventanaDelFormulario.classList.remove('ventana-completa');
            cerrar.classList.add('no-visible');
            cerrar.classList.add('scale-down-center');
            form.classList.add('scale-down-center');
            form.classList.remove('scale-up-center');
        };

});
};

export{
    ventanaModal,
    seccionContacto

}
