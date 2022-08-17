import { enviarCorreo } from './js/mail.js';
import { ventanaModal } from './js/ventana-modal.js';

const navMenu = document.querySelector('.nav-contenedor'),
      titulo = document.querySelector('.encabezado-titulo');

const crearMenuHtml =()=>{

    const html = `
    <nav>
        <input type="checkbox" id="menu">
        <label class='centrar-column-flex color-blanco' for="menu"> ☰ </label>
        <ul>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#inicio"><li>Inicio</li></a>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#informacion"><li>Sobre mi</li></a>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#tecnologias"><li>Tecnologias</li></a>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#proyectos"><li>Proyectos</li></a>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#servicios"><li>Mis servicios</li></a>
        <a class="fuente-ubuntu link color-blanco fuente-ubuntu" href="#contacto"><li>Contacto</li></a>
        </ul>
      </nav>
      <header class='centrar-texto'>
      <h1 class="nombre-logo fuente-ubuntu">{ LuisLV }</h1>
    </header>

    `;

    navMenu.innerHTML = html;
}



//Funcion que nos ayuda a detectar un cambio de tamaño en la pantalla.
// window.addEventListener('resize', ( )=>{

    if(screen.width <= 600){    
            (navMenu.firstElementChild === true)?'' :crearMenuHtml();
    }

    ventanaModal();
    enviarCorreo();
// });



