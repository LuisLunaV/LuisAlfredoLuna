const navMenu = document.querySelector('.nav-contenedor');

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


if(screen.width <= 559){


    do{
        
        navMenu.removeChild(navMenu.firstElementChild);

    }while(navMenu.firstElementChild);
        // (navMenu.firstElementChild === true)? '' : crearBurgerHtml();

        (navMenu.firstElementChild === true)?'' :crearMenuHtml();


}

