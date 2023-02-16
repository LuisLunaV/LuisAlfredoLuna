const modal = document.querySelector('.contenedor-modal');

export const htmlFormulario =(  ) => {
    const html = `<div class="contenedor-cerrar">
    <i class="fas fa-times fa-2x btn-cerrar" id="X"></i>
  </div>
  <form class="formulario" id="form">
    <div class="contenedor-nombre-email">
      <div class="contenedor-input-nombre fuente-ubuntu columna">
        <label class="label-tamaño" for="nombre">Tu nombre</label>
        <input
          type="text"
          class="input-box"
          id="nombre"
          name="nombre"
          required
        />
      </div>
      <div class="contenedor-input-email fuente-ubuntu columna">
        <label class="label-tamaño" for="correo">Tu correo</label>
        <input
          type="email"
          class="input-box"
          id="correo"
          name="correo"
          required
        />
      </div>
    </div>

    <div class="contenedor-textarea">
      <textarea
        class="text-comentario"
        id="comentario"
        name="mensaje"
        placeholder="Tu mensaje aqui..."
        required
      ></textarea>
    </div>

    <div class="contenedor-boton-enviar">
      <input
        type="submit"
        class="input-box btn-enviar-mensaje"
        id="button"
        value="Enviar"
      />
    </div>
  </form>`;

modal.innerHTML = html;

};