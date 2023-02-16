import { limpiarModal } from './limpiarModal.js';
import { htmlFormulario } from './components/formulario.js';
import { mensajeDeEnviado } from './components/msjEnviado.js';
import { mostrarFormulario } from './utils/mostrarForm.js';
import { cerrarModal } from './utils/cerrarModal.js';
import { enviarCorreo } from './mail.js';
export{
    mensajeDeEnviado,
    enviarCorreo,
    cerrarModal,
    mostrarFormulario,
    limpiarModal,
    htmlFormulario
}