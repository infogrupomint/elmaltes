// Datos de ejemplo de productos agrupados por categorías
const categories = ['Pizzas', '1/2 Pizza', 'Empanadas', 'Canastitas', 'Sandwiches', 'Bebidas' ];

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

  '1/2 Pizza': [
    { id: 23, name: '1/2 P. Muzzarella', price: 2500, quantity: 1,},
    { id: 24, name: '1/2 P. Especial', price: 3600, quantity: 1, },
    { id: 25, name: '1/2 P. Cebolla', price: 3250, quantity:1 },
    { id: 26, name: '1/2 P. Napolitana', price: 3750, quantity:1 },
    { id: 27, name: '1/2 P. Capresse', price: 3250, quantity:1 },
    { id: 28, name: '1/2 P. Papas Fritas', price: 3600, quantity:1 },
    { id: 29, name: '1/2 P. Fritas c/Salame', price: 3600, quantity:1 },
    { id: 30, name: '1/2 P. Provolone c/Jamon', price: 3750, quantity:1 },
    { id: 31, name: '1/2 P. Calabresa', price: 2850, quantity:1 },
    { id: 32, name: '1/2 P. Rucula c/ Parmesano', price: 3600, quantity:1 },
    { id: 33, name: '1/2 P. Rucula c/ Crudo', price: 3750, quantity:1 },
    { id: 34, name: '1/2 P. Palmitos', price: 3750, quantity:1 },
    { id: 35, name: '1/2 P. Choclo', price: 3750, quantity:1 },
    { id: 36, name: '1/2 P. Panceta', price: 3750, quantity:1 },
    { id: 37, name: '1/2 P. Anana c/ Jamon', price: 3750, quantity:1 },
    { id: 38, name: '1/2 P. Pollo', price: 3750, quantity:1 },
    { id: 39, name: '1/2 P. Roquefort', price: 3750, quantity:1 },
    { id: 40, name: '1/2 P. 4 Quesos', price: 3750, quantity:1 },
    { id: 41, name: '1/2 P. Anchoas', price: 3750, quantity:1 },
    { id: 42, name: '1/2 P. Veranito', price: 3750, quantity:1 },
    { id: 43, name: '1/2 P. S.O.S', price: 3750, quantity:1 },
    { id: 44, name: '1/2 P. Cordoba', price: 3750, quantity:1 },

  ],

  'Empanadas': [
    { id: 45, name: 'E. de Carne', price: 850, quantity:1 },
    { id: 46, name: 'E. de Pollo', price: 850, quantity:1 },
    { id: 47, name: 'E. de Jamon y Queso', price: 850, quantity:1 },
    { id: 48, name: 'E. de Choclo', price: 850, quantity:1 },
    { id: 49, name: 'E. de Cebolla', price: 850, quantity:1 },
    { id: 50, name: 'E. de Verdura', price: 850, quantity:1 },
  ],
  'Canastitas': [
    { id: 51, name: 'C. Capresse', price: 950, quantity:1 },
    { id: 52, name: 'C. Panceta y Cebolla', price: 950, quantity:1 },
    { id: 53, name: 'C. Roquefort y Nuez', price: 950, quantity:1 },
    { id: 54, name: 'C. Atun', price: 950, quantity:1 },
  ],
  'Sandwiches': [
    { id: 55, name: 'Milanesa c/ Fritas', price: 3500, quantity:1 },
    { id: 56, name: 'Hamburguesa c/ Fritas', price: 4000, quantity:1 },
    { id: 57, name: 'Lomo c/ Fritas', price: 5700, quantity:1 },
    { id: 58, name: 'Lomopizza', price: 23000, quantity:1 },
    { id: 59, name: 'Porcion Papas Fritas', price: 2200, quantity:1 },
  ],
  'Bebidas': [
    { id: 60, name: 'Coca Cola 1.5 L', price: 2200, quantity:1 },
    { id: 61, name: 'Coca Cola Zero 1.5 L', price: 2200, quantity:1 },
    { id: 62, name: 'Sprite 1.5 L', price: 2200, quantity:1 },
    { id: 63, name: 'Lata Cerveza Imperial Rubia', price: 1800, quantity:1 },
    { id: 64, name: 'Lata Cerveza Imperial Apa', price: 1800, quantity:1 },
    { id: 65, name: 'Lata Cerveza Imperial Roja', price: 1800, quantity:1 },
  ],

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

  const salaSeleccionada = document.getElementById('sala').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const pago = document.getElementById('pago').value;
  const horapedido = document.getElementById('horapedido').value;

  let mensajePedido =`----------------------------------\n`;
  mensajePedido    += `| ${horapedido} | PEDIDO:    \n`;
  let total = 0; // Inicializa una variable para almacenar el total
  

    cart.forEach(item => {
      mensajePedido += ` ${item.name} - $${item.price}\n`;
      total += item.price; // Agrega el precio del artículo al total
  });
  
  
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `Total: $${totalPrecio}\n`; // Agrega una línea para mostrar el total
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `${salaSeleccionada}\n ${ubicacion}\n`;
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `${pago}\n`;
  mensajePedido +=`----------------------------------\n`;
  



  // Enviar el pedido a través de WhatsApp
  const numeroWhatsApp = '+5492364266611'; // Reemplaza con tu número de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');

}



