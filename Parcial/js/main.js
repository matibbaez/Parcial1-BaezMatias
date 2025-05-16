/*  
    Instrucciones del Parcial

    - Responde los puntos en orden.
    - Se valorará:
        * Código limpio
        * Comentarios claros
        * Separación en bloques funcionales
        * Buen uso de funciones/modularización

    IMPORTANTE:
    - El trabajo debe desarrollarse utilizando buenas prácticas de programación en JavaScript.
*/

// Objeto con datos personales
const misDatos = {
  nombre: "Matías",
  apellido: "Baez",
  dni: "46579833"
};

// Mostrar nombre y apellido
function mostrarDatosPersonales() {
  const nombreCompleto = `${misDatos.nombre} ${misDatos.apellido}`;
  document.querySelector('.nombreAlumno').textContent = nombreCompleto;
  console.log(nombreCompleto);
}

// Productos
const db = [
  {
    id: 1,
    nombre: "arandano",
    precio: 5000,
    img: "img/arandano.jpg"
  },
  {
    id: 2,
    nombre: "banana",
    precio: 2000,
    img: "img/banana.jpg"
  },
  {
    id: 3,
    nombre: "manzana",
    precio: 3000,
    img: "img/manzana.jpg"
  },
  {
    id: 4,
    nombre: "naranja",
    precio: 2500,
    img: "img/naranja.jpg"
  },
  {
    id: 5,
    nombre: "pera",
    precio: 3500,
    img: "img/pera.jpg"
  },
  {
    id: 6,
    nombre: "sandia",
    precio: 8000,
    img: "img/sandia.jpg"
  }
];

// Función para renderizar productos en el DOM
function renderizarProductos(productos) {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = ''; // Limpiar el contenedor
  
  if (productos.length === 0) {
    productGrid.innerHTML = '<p>No se encontraron productos</p>';
    return;
  }
  
  productos.forEach(producto => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button class="add-to-cart" data-id="${producto.id}">Agregar a carrito</button>
    `;
    productGrid.appendChild(productCard);
  });
}

/*  
    Punto 4 _________________________

    Crea la función `filtro()` para filtrar los productos por nombre.
    - Asocia esta función al evento `keyup` de un campo `<input>`.
    - Cada vez que se escriba una letra, deben mostrarse solo los productos que coincidan con el texto ingresado.
*/

/*  
    Punto 5 _________________________

    Agrega la funcionalidad de carrito:
    - Crea un array `carrito` que almacene los productos seleccionados.
    - Al presionar “Agregar a carrito”, el producto debe aparecer en el listado con id `cart-items`.

    El HTML del carrito debe tener el siguiente formato:

        <li class="item-block">
            <p class="item-name">nombreproducto - $precioproducto</p>
            <button class="delete-button">Eliminar</button>
        </li>
*/

/*  
    Punto 6 _________________________

    Guarda los productos del carrito en `localStorage`.
    - Asegúrate de que al recargar la página el carrito se recupere automáticamente desde `localStorage`.
*/

// Función inicializadora
function init() {
  // Aquí deben invocarse todas las funciones necesarias para que la aplicación comience a funcionar
  
}


