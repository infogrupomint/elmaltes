// Datos de ejemplo de productos agrupados por categorías
const categories = ['Pizzas', 'Empanadas', 'Canastitas', 'Sandwiches'];

const products = {
  'Pizzas': [
    { id: 1, name: 'P. Muzzarella', price: 5000, quantity: 1,},
    { id: 2, name: 'P. Especial', price: 7200, quantity: 1, },
    { id: 3, name: 'P. Cebolla', price: 6500, quantity:1 },
    { id: 4, name: 'P. Napolitana', price: 7500, quantity:1 },
    { id: 5, name: 'P. Capresse', price: 6500, quantity:1 },
    { id: 6, name: 'P. Papas Fritas', price: 7200, quantity:1 },
    { id: 7, name: 'P. Fritas c/Salame', price: 7200, quantity:1 },
    { id: 8, name: 'P. Provolone c/Jamon', price: 7500, quantity:1 },
    { id: 9, name: 'P. Calabresa', price: 5700, quantity:1 },
    { id: 10, name: 'P. Rucula c/ Parmesano', price: 7200, quantity:1 },
    { id: 11, name: 'P. Rucula c/ Crudo', price: 7500, quantity:1 },
    { id: 12, name: 'P. Palmitos', price: 7500, quantity:1 },
    { id: 13, name: 'P. Choclo', price: 7500, quantity:1 },
    { id: 14, name: 'P. Panceta', price: 7500, quantity:1 },
    { id: 15, name: 'P. Anana c/ Jamon', price: 7500, quantity:1 },
    { id: 16, name: 'P. Pollo', price: 7500, quantity:1 },
    { id: 17, name: 'P. Roquefort', price: 7500, quantity:1 },
    { id: 18, name: 'P. 4 Quesos', price: 7500, quantity:1 },
    { id: 19, name: 'P. Anchoas', price: 7500, quantity:1 },
    { id: 20, name: 'P. Veranito', price: 7500, quantity:1 },
    { id: 21, name: 'P. S.O.S', price: 7500, quantity:1 },
    { id: 22, name: 'P. Cordoba', price: 7500, quantity:1 },

  ],
  'Empanadas': [
    { id: 23, name: 'E. de Carne', price: 850, quantity:1 },
    { id: 24, name: 'E. de Pollo', price: 850, quantity:1 },
    { id: 25, name: 'E. de Jamon y Queso', price: 850, quantity:1 },
    { id: 26, name: 'E. de Choclo', price: 850, quantity:1 },
    { id: 27, name: 'E. de Cebolla', price: 850, quantity:1 },
    { id: 28, name: 'E. de Verdura', price: 850, quantity:1 },
  ],
  'Canastitas': [
    { id: 29, name: 'C. Capresse', price: 950, quantity:1 },
    { id: 30, name: 'C. Panceta y Cebolla', price: 950, quantity:1 },
    { id: 31, name: 'C. Roquefort y Nuez', price: 950, quantity:1 },
    { id: 32, name: 'C. Atun', price: 950, quantity:1 },
  ],
  'Sandwiches': [
    { id: 33, name: 'Milanesa c/ Fritas', price: 3500, quantity:1 },
    { id: 34, name: 'Hamburguesa c/ Fritas', price: 4000, quantity:1 },
    { id: 35, name: 'Lomo c/ Fritas', price: 5700, quantity:1 },
    { id: 36, name: 'Lomopizza', price: 20000, quantity:1 },
    { id: 37, name: 'Porcion Papas Fritas', price: 2200, quantity:1 },
  ]
};

// Llamamos a la función loadCategories al cargar la página para cargar las categorías
window.onload = function() {
  loadCategories();
};

// Función para cargar las categorías
function loadCategories() {
  const categoriesElement = document.getElementById('categories');
  
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = "categorias-btn";
    button.textContent = category;
    button.addEventListener('click', () => filterCategory(category));
    categoriesElement.appendChild(button);
  });
}

// Función para cargar los productos de una categoría
function filterCategory(category) {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';

  products[category].forEach(product => {
    const productHTML = `
    <div class="productInicio">
    <h3>${product.name}</h3>
    <div class="details">
      <p>Precio: $${product.price}</p>
      <button class="btnAgregarCarrito" onclick="addToCart('${product.name}', ${product.price}, ${product.quantity}, ${product.id})">Agregar al carrito</button>
    </div>
    `;
    menu.insertAdjacentHTML('beforeend', productHTML);
  });

}

// Array para almacenar los productos seleccionados en el carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice, productQuantity, productId,) {
  // Crear un objeto que representa el producto seleccionado
  const product = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    id: productId,
  };

  //Ponemos un mensaje de 2 segundos cada vez que se aprete el boton Agregar al carrito
  const mensaje = document.createElement('div');
  mensaje.textContent = 'Añadido al Carrito';
  mensaje.classList.add('mensajeTemporal');
  document.body.appendChild(mensaje);

  // Después de 2 segundos, eliminamos el mensaje temporal
  setTimeout(() => {
    mensaje.remove();
  }, 500);

  // Agregar el producto al carrito
  cart.push(product);

  // Recorrer la lista de productos en el carrito y actualizar la interfaz de usuario
  let total = 0;
  console.log(cart);

}


// Función para enviar el pedido por WhatsApp
function sendOrder() {

  // Formar el mensaje del pedido

  let mensajePedido =`----------------------------------\n`;
  mensajePedido    += `   PEDIDO:    \n`;
  let total = 0; // Inicializa una variable para almacenar el total
  


    const salaSeleccionada = document.getElementById('sala').value;
    const ubicacion = document.getElementById('ubicacion').value;
    cart.forEach(item => {
      mensajePedido += ` ${item.name} - $${item.price}\n`;
      total += item.price; // Agrega el precio del artículo al total
  });
  
  
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `Total: $${totalPrecio}\n`; // Agrega una línea para mostrar el total
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `${salaSeleccionada}\n ${ubicacion}\n`;
  mensajePedido +=`----------------------------------\n`;
  



  // Enviar el pedido a través de WhatsApp
  const numeroWhatsApp = '+5492364265933'; // Reemplaza con tu número de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');

}



