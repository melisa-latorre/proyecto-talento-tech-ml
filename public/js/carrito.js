document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar el carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // 2. Elementos del DOM
    const contenedor = document.getElementById("carrito-contenedor");
    const totalElemento = document.getElementById("carrito-total");
    const contadorCarrito = document.querySelector(".navbar-principal .count");
    const botonVaciar = document.getElementById("vaciar-carrito");
    const botonFinalizar = document.getElementById("finalizar-compra");

    // 3. Función para renderizar los elementos en pantalla
    const renderizarCarrito = () => {
        contenedor.innerHTML = "";

        if (carrito.length === 0) {
            contenedor.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío. ¡Pasate por la tienda para ver los productos destacados de Franco!</p>`;
            totalElemento.textContent = "$0";
            if (contadorCarrito) contadorCarrito.textContent = "0";
            return;
        }

        let totalGeneral = 0;
        let totalItems = 0;

        // Recorremos el carrito y creamos la estructura idéntica a tus .card
        carrito.forEach((producto, indice) => {
            totalGeneral += producto.precio * producto.cantidad;
            totalItems += producto.cantidad;

            const articulo = document.createElement("article");
            articulo.classList.add("card");

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <h3>${producto.titulo}</h3>
                <p class="precio">Cant: ${producto.cantidad} x $${producto.precio.toLocaleString('es-AR')}</p>
                <button class="btn-eliminar" data-indice="${indice}">ELIMINAR</button>
            `;

            contenedor.appendChild(articulo);
        });

        // Actualizamos totales en la interfaz
        totalElemento.textContent = `$${totalGeneral.toLocaleString('es-AR')}`;
        if (contadorCarrito) contadorCarrito.textContent = totalItems;

        // Asignamos funcionalidad a los botones de eliminar creados dinámicamente
        const botonesEliminar = document.querySelectorAll(".btn-eliminar");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", eliminarProducto);
        });
    };

    // 4. Función para restar cantidad o eliminar el producto
    const eliminarProducto = (e) => {
        const indice = e.target.getAttribute("data-indice");
        
        if (carrito[indice].cantidad > 1) {
            carrito[indice].cantidad -= 1;
        } else {
            carrito.splice(indice, 1);
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
    };

    // 5. Función para vaciar por completo el carrito
    botonVaciar.addEventListener("click", () => {
        if (carrito.length > 0) {
            carrito = [];
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        }
    });

    // 6. Función para simular la finalización de compra
    botonFinalizar.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("No hay productos en el carrito para procesar.");
            return;
        }
        alert("¡Gracias por tu compra en la tienda de Franco Colapinto!");
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
    });

    // Inicializar la vista al abrir la página
    renderizarCarrito();
});