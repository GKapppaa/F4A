function inyectarFooter(){
    document.getElementById("footer").innerHTML = `
        <p>
            web peich do corxea
        </p>
        <section id="footer-section">
            <div class="pago">
                <img src="" alt="paypal">
            </div>
        </section>

        <div>
            <p>El uso de la plataforma F4A Web implica la aceptación de los
            #Términos y Condiciones</a>.
            Puedes encontrar información sobre cómo procesamos tus datos personales
            en la #Política de Privacidad</a> y la
            #Política de Cookies</a>.</p>
        </div>
    `;
}
function inyectarHeader(){
  document.getElementById("header").innerHTML = `
        <div class="header-top">
          <h1>
            <a href="inicio">
              <img class="logo" src="imagenes/logo.webp" alt="Tu tienda online">
            </a>
          </h1>
          <form action="/buscar" method="GET">
              <label for="barra-busqueda">Buscar:</label>
              <div class="buscar">
                <input type="search" id="barra-busqueda" name="q" placeholder="Buscar...">
                <button type="submit" id="buscar">🔍</button>
              </div>
          </form>

          <div class="btn-extras">
            <button type="button" id="btn-regiones">ES / EUR</button>
            <button type="button" id="btn-">
          </div>
        </div>
        <section>
            <a href="#">Gaming</a>
            <a href="#">Software</a>
            <a href="#">Subscripciones</a>
            <a href="#">Regalos</a>
            <a href="#">Random Keys</a>
        </section>
    `;
}
inyectarFooter();
inyectarHeader();
