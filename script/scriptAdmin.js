document.addEventListener("DOMContentLoaded", () => {
    const sesion = JSON.parse(localStorage.getItem('sesionActual'));
    if (!sesion || sesion.rol !== 'admin') {
        alert('No tienes acceso de administrador');
        location.href = 'index.html';
        return;
    }

    function mostrarProductos() {
        const lista = document.getElementById('lista-productos');
        const productos = JSON.parse(localStorage.getItem('carrito')) || [];
        lista.innerHTML = '';
        if (productos.length === 0) {
            lista.innerHTML = '<li>No hay productos agregados</li>';
            return;
        }
        productos.forEach((p, i) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${p.nombre} - $${p.precio}</span>
                <button class="btn-delete" onclick="eliminarProducto(${i})">Eliminar</button>
            `;
            lista.appendChild(li);
        });
    }

    window.eliminarProducto = function(index) {
        let productos = JSON.parse(localStorage.getItem('carrito')) || [];
        productos.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(productos));
        mostrarProductos();
    };

    const formAgregar = document.getElementById('form-agregar');
    if (formAgregar) {
        formAgregar.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('producto-nombre').value;
            const precio = parseInt(document.getElementById('producto-precio').value);
            const imagen = document.getElementById('producto-imagen').value;
            const productos = JSON.parse(localStorage.getItem('carrito')) || [];
            productos.push({ nombre, precio, imagen });
            localStorage.setItem('carrito', JSON.stringify(productos));
            this.reset();
            mostrarProductos();
        });
    }

    mostrarProductos();
});
