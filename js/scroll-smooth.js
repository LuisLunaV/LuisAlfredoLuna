window.onload = () => {

    const linkRespomsive = document.querySelectorAll(".link");
    const linkMenu = document.querySelectorAll(".link-menu");

    linksMenu( linkRespomsive );
    linksMenu( linkMenu );

  };

  const linksMenu =( link )=>{

    let inicio = link[0];
    inicio.addEventListener("click", () => {
      scrollSuave("#inicio", 1000, 0);
    });
  
    let informacion = link[1];
    informacion.addEventListener("click", () => {
      scrollSuave("#informacion", 900, 0);
    });
  
    let tecnologias = link[2];
    tecnologias.addEventListener("click", () => {
      scrollSuave("#tecnologias", 900, 0);
    });
    let proyectos = link[3];
    proyectos.addEventListener("click", () => {
      scrollSuave("#proyectos", 900, 0);
    });
    let servicios = link[4];
    servicios.addEventListener("click", () => {
      scrollSuave("#servicios", 900, 0);
    });
    let contacto = link[5];
    contacto.addEventListener("click", () => {
      scrollSuave("#contacto", 1000, 0);
    });

  };
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo);
    let elemPos = elemObj.getBoundingClientRect().top - compensacion;
    let posInicial = window.pageYOffset;
    let tiempoInicial = null;
  
    const animacion = (tiempoAhora) => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora;
      tiempoPasado = tiempoAhora - tiempoInicial;
      let auxAnimacion = easeInOutQuad(
        tiempoPasado,
        posInicial,
        elemPos,
        duracion
      );
      window.scrollTo(0, auxAnimacion);
      if (tiempoPasado < duracion) requestAnimationFrame(animacion);
    };
    requestAnimationFrame(animacion);
  };
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  