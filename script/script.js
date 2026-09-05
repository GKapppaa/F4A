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
              <button type="button" id="btn-login">Acceder / Registro</button>
              <div class="menu-desplegable oculto">
                  <h3>Bienvenido!</h3>
                  <button type="button" class="btn-social">Acceder Google</button>
                  <button type="button"  class="btn-social">Acceder Facebook</button>
                  <button type="button"  class="btn-social">Acceder Paypal</button>
                  <button type="button" class="btn-login-principal">Acceder</button>
                  <p>Al hacer clic en Continuar con Google, Facebook o PayPal, aceptas las condiciones de F4A <a href="#">Términos y Condiciones</a> y <a href="#">Política de Privacidad</a></p>
                  <h3 class="menu-registro">¿No tienes una cuenta? <a href="#">Regístrate aquí</a></h3>
              </div>
            </div>
          </div>
          <section>
              <a href="gaming.html">Gaming</a>
              <a href="software.html">Software</a>
              <a href="#">Subscripciones</a>
              <a href="#">Regalos</a>
              <a href="#">Random Keys</a>
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
