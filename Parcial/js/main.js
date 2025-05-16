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

// Función para filtrar productos por nombre
function filtro() {
  const searchInput = document.querySelector('.search-bar');
  searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const productosFiltrados = db.filter(producto => 
      producto.nombre.toLowerCase().includes(searchTerm)
    );
    renderizarProductos(productosFiltrados);
  });
}

// Variables y funciones para el carrito
let carrito = [];

// Cargar carrito desde **localStorage**
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
}

// Guardar carrito en **localStorage**
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar producto al carrito
function agregarAlCarrito(productoId) {
  const producto = db.find(p => p.id === productoId);
  if (producto) {
    carrito.push(producto);
    guardarCarrito();
    actualizarCarrito();
    
    Toastify({
      text: `✔ ${producto.nombre} agregado al carrito`,
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#28a745",
      stopOnFocus: true
    }).showToast();
  }
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  const productoEliminado = carrito[index];
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarCarrito();
  
  Toastify({
    text: `✖ ${productoEliminado.nombre} se ha eliminado del carrito`,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    backgroundColor: "#dc3545",
    stopOnFocus: true
  }).showToast();
}

// Actualizar el carrito
function actualizarCarrito() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  const cartCount = document.getElementById('cart-count');
  
  if (carrito.length === 0) {
    cartItems.innerHTML = '<p>No hay elementos en el carrito.</p>';
    totalPrice.textContent = '$0.00';
    cartCount.textContent = '0';
    return;
  }
  
  cartItems.innerHTML = '';
  let total = 0;
  
  carrito.forEach((producto, index) => {
    total += producto.precio;
    
    const itemBlock = document.createElement('li');
    itemBlock.className = 'item-block';
    itemBlock.innerHTML = `
      <p class="item-name">${producto.nombre} - $${producto.precio}</p>
      <button class="delete-button" data-index="${index}">Eliminar</button>
    `;
    cartItems.appendChild(itemBlock);
  });
  
  totalPrice.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = carrito.length;
}

// Manejar eventos del carrito
function manejarEventosCarrito() {
  // Agregar al carrito
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const productoId = parseInt(e.target.getAttribute('data-id'));
      agregarAlCarrito(productoId);
    }
    
    // Eliminar del carrito
    if (e.target.classList.contains('delete-button')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      eliminarDelCarrito(index);
    }
  });
}

// Función inicializadora
function init() {
  mostrarDatosPersonales();
  renderizarProductos(db);
  filtro();
  cargarCarrito();
  manejarEventosCarrito();
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);


