export const limpiarModal =( modal )=>{
    do{
        modal.removeChild( modal.firstElementChild);
      }while(modal.firstElementChild)
};