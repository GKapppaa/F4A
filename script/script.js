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
              <button type="button" id="btn-regiones"><img src="imagenes/pago/ee-uu-16px.webp" alt="ee-uu-16px">US / EUR <img src="imagenes/pago/european-union-16px.webp" alt="european-union-16px"></button>
              <button type="button" id="btn-"></button>
            </div>
          </div>
          <section>
              <a href="gaming.html">Gaming</a>
              <a href="#">Software</a>
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
            web peich do corxea
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
});

const gamesContent = document.getElementById(games);
