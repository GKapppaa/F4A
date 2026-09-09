function inyectarHeader() {
  const headerElement = document.getElementById("header");
  if (headerElement !== null) {
    headerElement.innerHTML = `
          <div class="header-top">
            <h1>
              <a href="index.html">
                <img class="logo" src="imagenes/logo.webp" alt="Tu tienda online">
              </a>
            </h1>
            <form class="form-buscar" action="/buscar" method="GET">
                <label for="barra-busqueda">Buscar:</label>
                <div class="buscar">
                  <input type="search" id="barra-busqueda" name="q" placeholder="Buscar...">
                  <button type="submit" id="buscar">🔍</button>
                </div>
            </form>

            <div class="btn-extras">
              <button type="button" id="btn-regiones">CLP<img src="imagenes/pago/chile.webp" alt="chile">
                                                    / USD<img src="imagenes/pago/eeuu.webp" alt="eeuu">
                                                    / EUR <img src="imagenes/pago/euro.webp" alt="euro"></button>
            </div>
            <div class="contenedor-usuario">
              <button type="button" id="btn-login">Acceder</button>
              <div class="menu-desplegable oculto">
                  <h3>Bienvenido!</h3>
                  <button type="button" class="btn-social">Acceder Google</button>
                  <button type="button"  class="btn-social">Acceder Facebook</button>
                  <button type="button"  class="btn-social">Acceder Paypal</button>
                  <a href="index.html">
                      <button type="button" class="btn-login-principal">Acceder</button>
                  </a>
                  <p>Al hacer clic en Continuar con Google, Facebook o PayPal, aceptas las condiciones de F4A <a href="#">Términos y Condiciones</a> y <a href="#">Política de Privacidad</a></p>
                  <h3 class="menu-registro">¿No tienes una cuenta? <a href="#">Regístrate aquí</a></h3>
              </div>
            </div>
          </div>
          <section>
              <a href="gaming.html">Gaming</a>
              <a href="software.html">Software</a>
              <a href="subscripciones.html">Subscripciones</a>
              <a href="regalos.html">Regalos</a>
              <a href="randomkey.html">Random Keys</a>
              <a href="carrito.html">Carrito</a>
          </section>
      `;
  }
}

function inyectarFooter() {
  const footerElement = document.getElementById("footer");
  if (footerElement !== null) {
    footerElement.innerHTML = `
        <p>
            F4A Web
        </p>
        <section id="footer-section">
            <div class="pago">
                <img src="imagenes/pago/paypal.webp" alt="paypal">
                <img src="imagenes/pago/visa.webp" alt="visa">
                <img src="imagenes/pago/mastercard.webp" alt="mastercard">
                <img src="imagenes/pago/mercadopago.webp" alt="mercadopago">
                <img src="imagenes/pago/webpay.webp" alt="webpay">
            </div>
        </section>

        <div>
            <p>El uso de la plataforma F4A Web implica la aceptación de los
            <a href="#">Términos y Condiciones</a>.

            Puedes encontrar información sobre cómo procesamos tus datos personales
            en la <a href="#">Política de Privacidad</a>

            y la
            <a href="#">Política de Cookies</a>.</p>
        </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inyectarHeader();
  inyectarFooter();

  const btnLogin = document.getElementById("btn-login");
  const menuDesplegable = document.querySelector(".menu-desplegable");
  const contenedorUsuario = document.querySelector(".contenedor-usuario");

  if (btnLogin && menuDesplegable) {
    btnLogin.addEventListener("click", () => {
      menuDesplegable.classList.toggle("oculto");
    });
  }

  document.addEventListener("click", (evento) => {
    if (contenedorUsuario && !contenedorUsuario.contains(evento.target)) {
      menuDesplegable.classList.add("oculto");
    }
  });
});
//------------------------
// INICIO CARRITO
//------------------------
// Carga el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(boton, nombre, precio) {
  const imagen = boton.dataset.imagen;
  const producto = { nombre, precio, imagen };

  carrito.push(producto);
  // Guardamos el arreglo actualizado en el almacenamiento del navegador
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Remueve 1 elemento en la posición index
  // Guardamos el estado actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarItems();           // Vuelve a renderizar la lista actualizada
}

function mostrarItems() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');

  if (!lista || !total) return;

  lista.innerHTML = '';
  let totalAcumulado = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item-carrito';

    const img = document.createElement('img');
    img.src = item.imagen;
    img.alt = item.nombre;
    img.className = 'img-carrito';

    const spanTexto = document.createElement('span');
    spanTexto.textContent = `${item.nombre} : $${item.precio} `;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'x';
    botonEliminar.className = 'btn-eliminar';
    botonEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(img);
    li.appendChild(spanTexto);
    li.appendChild(botonEliminar);// Insertamos el botón dentro del <li> antes de agregarlo a la lista
    lista.appendChild(li);

    totalAcumulado += item.precio;
  });

  total.textContent = totalAcumulado;
}

function limpiar() {
  carrito = [];
  localStorage.removeItem('carrito');
  mostrarItems();
}

// Ejecuta mostrarItems apenas la página cargue
document.addEventListener('DOMContentLoaded', mostrarItems);
//------------------------
// FIN CARRITO
//------------------------
