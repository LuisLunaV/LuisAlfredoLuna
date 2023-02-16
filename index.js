import { ventanaModal } from './js/ventana-modal.js';

// selector
const menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

// window.addEventListener('scroll', ( )=>{
//     if(scrollY < 788){
// })



    ventanaModal();




