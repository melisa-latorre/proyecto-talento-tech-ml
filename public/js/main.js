document.addEventListener("DOMContentLoaded", () => {
    /* inicializar el carrito levantando los datos de localStorage (si existen) */
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    /* capturar los elementos del DOM necesarios */
    const contadorCarrito = document.querySelector(".navbar-principal .count");
    const botonesComprar = document.querySelectorAll(".productos-grid .card button");

    /* función para actualizar el número total en el menú de navegación */
    const actualizarContador = () => {
        if (contadorCarrito) {
            const totalItems = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
            
            if (totalItems === 0) {
                contadorCarrito.textContent = "";
            } else {
                contadorCarrito.textContent = totalItems;
            }
        }
    };

    /* clicks en cada botón "COMPRAR" */
    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const tarjetaProducto = e.target.closest(".card");
            
            const titulo = tarjetaProducto.querySelector("h3").textContent;
            const precioTexto = tarjetaProducto.querySelector(".precio").textContent;
            const imagenSrc = tarjetaProducto.querySelector("img").getAttribute("src");

            const precio = parseInt(precioTexto.replace("$", "").replace(/\./g, ""), 10);

            
            const existeProducto = carrito.find(item => item.titulo === titulo);

            if (existeProducto) {
                existeProducto.cantidad += 1;
            } else {
                const nuevoProducto = {
                    titulo: titulo,
                    precio: precio,
                    imagen: imagenSrc,
                    cantidad: 1
                };
                carrito.push(nuevoProducto);
            }

            /* guardar el array actualizado en localStorage */
            localStorage.setItem("carrito", JSON.stringify(carrito));

            /* actualizar la interfaz del contador */
            actualizarContador();
            
            /* visual rápido en el botón para indicar que se agregó al carrito */
            boton.textContent = "¡AGREGADO!";
            boton.style.backgroundColor = "#28a745"; 
            setTimeout(() => {
                boton.textContent = "COMPRAR";
                boton.style.backgroundColor = ""; 
            }, 1000);
        });
    });

    /* ejecutar al cargar por si ya había ítems previos */
    actualizarContador();
});









