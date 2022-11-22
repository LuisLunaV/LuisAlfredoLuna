const scrollBtn = document.querySelector(".scroll-top-btn")
window.onscroll = () => {
    let y = window.scrollY;
    if(y>100){
        scrollBtn.classList.remove("ocultar")
        scrollBtn.addEventListener("click",()=>{
            window.scrollTo(0,1)
             })
    }
    else scrollBtn.classList.add("ocultar")
  };