window.onload = () => {
    let links = document.querySelectorAll(".link");
  
    let inicio = links[0];
    inicio.addEventListener("click", () => {
      scrollSuave("#inicio", 1000, 0);
    });
  
    let informacion = links[1];
    informacion.addEventListener("click", () => {
      scrollSuave("#informacion", 900, 0);
    });
  
    let tecnologias = links[2];
    tecnologias.addEventListener("click", () => {
      scrollSuave("#tecnologias", 900, 0);
    });
    let proyectos = links[3];
    proyectos.addEventListener("click", () => {
      scrollSuave("#proyectos", 900, 0);
    });
    let servicios = links[4];
    servicios.addEventListener("click", () => {
      scrollSuave("#servicios", 900, 0);
    });
    let contacto = links[5];
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

  