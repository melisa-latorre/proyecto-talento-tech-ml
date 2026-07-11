document.addEventListener("DOMContentLoaded", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const contadorCarrito = document.querySelector(".navbar-principal .count");
    const botonesComprar = document.querySelectorAll(".productos-grid .card button");


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

            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarContador();
            
            boton.textContent = "¡AGREGADO!";
            boton.style.backgroundColor = "#28a745"; 
            setTimeout(() => {
                boton.textContent = "COMPRAR";
                boton.style.backgroundColor = ""; 
            }, 1000);
        });
    });

    actualizarContador();
});