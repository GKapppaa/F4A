function inyectarFooter(){
    document.getElementById("footer").innerHTML = `
        <p>
            web peich do corxea
        </p>
    `;
}
function inyectarHeader(){
  document.getElementById("header").innerHTML = `
        <div class="header-top">
          <h1>
              <span style="color: lightgreen">F</span>
              <span style="color: white">4</span>
              <span style="color: blue">A</span>
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
