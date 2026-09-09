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
        <section id="footer-titulo">
          <a href="index.html">
            <img class="logo" src="imagenes/logo.webp" alt="Tu tienda online">
          </a>
        </section>

        <section id="footer-columnas">
            <div class="columna">
              <H3>F4A WEB</H3>
                <ul>
                  <li><a href="quienes-somos.html">Quiénes somos</a></li>
                  <li><a href="nosotros.html">Nosotros</a></li>
                  <li><a href="terminos.html">Términos y Condiciones</a></li>
                  <li><a href="privacidad.html">Privacidad</a></li>
                </ul>
            </div>

            <div class="columna">
              <H3>CATEGORÍAS</H3>
                <ul>
                  <li><a href="gaming.html">Gaming</a></li>
                  <li><a href="software.html">Software</a></li>
                  <li><a href="subscripciones.html">Subscripciones</a></li>
                  <li><a href="regalos.html">Regalos</a></li>
                </ul>
            </div>

            <div class="columna">
              <H3>AYUDA</H3>
                <ul>
                  <li><a href="contacto.html">Contacto</a></li>
                  <li><a href="faqs.html">FAQs</a></li>
                  <li><a href="politica-cookies.html">Política Cookies</a></li>
                </ul>
            </div>
        </section>

        <section id="footer-section">
            <div class="pago">
              <img src="imagenes/pago/paypal.webp" alt="paypal">
              <img src="imagenes/pago/visa.webp" alt="visa">
              <img src="imagenes/pago/mastercard.webp" alt="mastercard">
              <img src="imagenes/pago/mercadopago.webp" alt="mercadopago">
              <img src="imagenes/pago/webpay.webp" alt="webpay">
            </div>
        </section>

        <section id="footer-copyright">
          <p>&copy; 2026 F4A Web. Todos los derechos reservados</p>
        </section>
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

function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };

  carrito.push(producto);
  // Guardamos el arreglo actualizado en el almacenamiento del navegador
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarItems() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');

  if (!lista || !total) return;

  lista.innerHTML = '';
  let totalAcumulado = 0;

  carrito.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} : $${item.precio}`;

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
