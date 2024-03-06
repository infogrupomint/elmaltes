// Datos de ejemplo de productos agrupados por categorías
const categories = ['Pizzas', 'Empanadas', 'Canastitas', 'Sandwiches'];

const products = {
  'Pizzas': [
    { name: 'P. Muzzarella', price: 5000, quanty:1},
    { name: 'P. Especial', price: 7200, quanty:1 },
    { name: 'P. Cebolla', price: 6500, quanty:1 },
    { name: 'P. Napolitana', price: 7500, quanty:1 },
    { name: 'P. Capresse', price: 6500, quanty:1 },
    { name: 'P. Papas Fritas', price: 7200, quanty:1 },
    { name: 'P. Fritas c/Salame', price: 7200, quanty:1 },
    { name: 'P. Provolone c/Jamon', price: 7500, quanty:1 },
    { name: 'P. Calabresa', price: 5700, quanty:1 },
    { name: 'P. Rucula c/ Parmesano', price: 7200, quanty:1 },
    { name: 'P. Rucula c/ Crudo', price: 7500, quanty:1 },
    { name: 'P. Palmitos', price: 7500, quanty:1 },
    { name: 'P. Choclo', price: 7500, quanty:1 },
    { name: 'P. Panceta', price: 7500, quanty:1 },
    { name: 'P. Anana c/ Jamon', price: 7500, quanty:1 },
    { name: 'P. Pollo', price: 7500, quanty:1 },
    { name: 'P. Roquefort', price: 7500, quanty:1 },
    { name: 'P. 4 Quesos', price: 7500, quanty:1 },
    { name: 'P. Anchoas', price: 7500, quanty:1 },
    { name: 'P. Veranito', price: 7500, quanty:1 },
    { name: 'P. S.O.S', price: 7500, quanty:1 },
    { name: 'P. Cordoba', price: 7500, quanty:1 },

  ],
  'Empanadas': [
    { name: 'E. de Carne', price: 850, quanty:1 },
    { name: 'E. de Pollo', price: 850, quanty:1 },
    { name: 'E. de Jamon y Queso', price: 850, quanty:1 },
    { name: 'E. de Choclo', price: 850, quanty:1 },
    { name: 'E. de Cebolla', price: 850, quanty:1 },
    { name: 'E. de Verdura', price: 850, quanty:1 },
  ],
  'Canastitas': [
    { name: 'C. Capresse', price: 950, quanty:1 },
    { name: 'C. Panceta y Cebolla', price: 950, quanty:1 },
    { name: 'C. Roquefort y Nuez', price: 950, quanty:1 },
    { name: 'C. Atun', price: 950, quanty:1 },
  ],
  'Sandwiches': [
    { name: 'Milanesa c/ Fritas', price: 3500, quanty:1 },
    { name: 'Hamburguesa c/ Fritas', price: 4000, quanty:1 },
    { name: 'Lomo c/ Fritas', price: 5700, quanty:1 },
    { name: 'Lomopizza', price: 20000, quanty:1 },
    { name: 'Porcion Papas Fritas', price: 2200, quanty:1 },
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
      <button class="btnAgregarCarrito" onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
    </div>
    `;
    menu.insertAdjacentHTML('beforeend', productHTML);
  });
}

// Array para almacenar los productos seleccionados en el carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice, productQuanty) {
  // Crear un objeto que representa el producto seleccionado
  const product = {
    name: productName,
    price: productPrice,
    quanty: productQuanty
  };

  // Agregar el producto al carrito
  cart.push(product);



 

  // Recorrer la lista de productos en el carrito y actualizar la interfaz de usuario
  let total = 0;



}


// Función para enviar el pedido por WhatsApp
function sendOrder() {

  // Formar el mensaje del pedido
  let mensajePedido =`----------------------------------\n`;
  mensajePedido    += `   PEDIDO:    \n`;
  let total = 0; // Inicializa una variable para almacenar el total
  
  cart.forEach(item => {
      mensajePedido += ` ${item.name} - $${item.price}\n`;
      total += item.price; // Agrega el precio del artículo al total
  });
  
  mensajePedido +=`----------------------------------\n`;
  mensajePedido += `Total: $${total}\n`; // Agrega una línea para mostrar el total
  mensajePedido +=`----------------------------------\n`;
  



  // Enviar el pedido a través de WhatsApp
  const numeroWhatsApp = '+5492364265933'; // Reemplaza con tu número de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');

}



