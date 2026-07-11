Entrega del proyecto final para el curso "Frontend-js" de Talento Tech. 


# 🏎️ TIENDA OFICIAL FRANCO COLAPINTO - ALPINE F1 TEAM 🏎️

Este proyecto es una página web interactiva que simula un e-commerce de indumentaria y coleccionables del piloto argentino de la escudería Alpine F1 Team. 


---

## CARACTERÍSTICAS DEL PROYECTO

*   **Catálogo dinámico:** sección de productos destacados con imágenes, descripción y precios limpios para el procesamiento de datos.
*   **Carrito de compras funcional:** permite añadir productos, incrementar cantidades, eliminar ítems individuales y vaciar el carrito por completo.
*   **Persistencia de datos (LocalStorage):** los productos seleccionados permanecen guardados de forma segura en el navegador del usuario, incluso si se cierra la pestaña o se apaga el dispositivo.
*   **Contador global sincronizado:** el indicador flotante en el menú de navegación (`(0)`) rastrea y muestra la cantidad total de artículos en tiempo real a lo largo de todas las páginas de la web (Inicio, Tienda, Carrito, Contacto).
*   **Diseño responsivo:** interfaz adaptada para una visualización óptima tanto en computadoras de escritorio como en dispositivos móviles (Media Queries).

---

## TECNOLOGÍAS UTILIZADAS

*   **HTML5:** estructura semántica de las páginas de navegación.
*   **CSS3:** estilado personalizado basado en la identidad visual de Alpine (Grillas, flexbox, variables de color y tipografía *Montserrat*).
*   **JavaScript:** lógica del negocio, persistencia y control de la interactividad.
*   **Manipulación del DOM:** renderizado dinámico de productos, actualización de textos y creación de componentes en tiempo real.
*   **Web Storage API:** uso estricto de `localStorage` para el manejo de estado local (sin consumo de APIs externas).

---

## ESTRUCTURA DE ARCHIVOS

El flujo del JavaScript está modularizado para evitar errores de ejecución en páginas sin elementos de compra:

```text
mi-proyecto/
├── index.html                  # Página de Inicio (Carga contador-global.js)
├── css/
│   └── style.css               # Estilos unificados de la tienda y el carrito
├── public/
│   └── js/
│       ├── contador-global.js  # Auxiliar que mantiene vivo el contador en Inicio/Contacto
│       ├── main.js             # Lógica de captura y guardado en la Tienda
│       └── carrito.js          # Lógica de renderizado, cálculo de totales y borrado
└── views/
    ├── tienda.html             # Catálogo de productos disponibles
    ├── carrito.html            # Interfaz de revisión de compra
    └── contacto.html           # Formulario de contacto
