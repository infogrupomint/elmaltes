// Datos de ejemplo de productos agrupados por categorías
const categories = ['Pizzas', 'Empanadas', 'Canastitas', 'Sandwiches'];

const products = {
  'Pizzas': [
    { name: 'Pizza Muzzarella', price: 5000 },
    { name: 'Pizza Especial', price: 7200 },
    { name: 'Pizza Cebolla', price: 6500 },
    { name: 'Pizza Napolitana', price: 7500 },
    { name: 'Pizza Capresse', price: 6500 },
    { name: 'Pizza Papas Fritas', price: 7200 },
    { name: 'Pizza Papas Fritas c/Salame', price: 7200 },
    { name: 'Pizza Provolone c/Jamon', price: 7500 },
    { name: 'Pizza Calabresa', price: 5700 },
    { name: 'Pizza Rucula c/ Parmesano', price: 7200 },
    { name: 'Pizza Rucula c/ Crudo', price: 7500 },
    { name: 'Pizza Palmitos', price: 7500 },
    { name: 'Pizza Choclo', price: 7500 },
    { name: 'Pizza Panceta', price: 7500 },
    { name: 'Pizza Anana c/ Jamon', price: 7500 },
    { name: 'Pizza Pollo', price: 7500 },
    { name: 'Pizza Roquefort', price: 7500 },
    { name: 'Pizza 4 Quesos', price: 7500 },
    { name: 'Pizza Anchoas', price: 7500 },
    { name: 'Pizza Veranito', price: 7500 },
    { name: 'Pizza S.O.S', price: 7500 },
    { name: 'Pizza Cordoba', price: 7500 },

  ],
  'Empanadas': [
    { name: 'Empanada de Carne', price: 850 },
    { name: 'Empanada de Pollo', price: 850 },
    { name: 'Empanada de Jamon y Queso', price: 850 },
    { name: 'Empanada de Choclo', price: 850 },
    { name: 'Empanada de Cebolla', price: 850 },
    { name: 'Empanada de Verdura', price: 850 },
  ],
  'Canastitas': [
    { name: 'Canastita Capresse', price: 950 },
    { name: 'Canastita Panceta y Cebolla', price: 950 },
    { name: 'Canastita Roquefort y Nuez', price: 950 },
    { name: 'Canastita Atun', price: 950 },
  ],
  'Sandwiches': [
    { name: 'Sandwich Milanesa Individual Completo Con Papas Fritas', price: 3500 },
    { name: 'Sandwich Hamburguesa Individual Completo con Papas Fritas', price: 4000 },
    { name: 'Sandwich Lomo Individual Completo con Papas Fritas', price: 5700 },
    { name: 'Lomopizza', price: 20000 },
    { name: 'Porcion de Papas Fritas', price: 2200 },
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
      <div class="product">
        <h3>${product.name} </h3>
         <p>Precio: $${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
      </div>
    `;
    menu.insertAdjacentHTML('beforeend', productHTML);
  });
}

// Array para almacenar los productos seleccionados en el carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
  // Crear un objeto que representa el producto seleccionado
  const product = {
    name: productName,
    price: productPrice
  };

  // Agregar el producto al carrito
  cart.push(product);

  // Actualizar la interfaz de usuario para mostrar el carrito
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  // Limpiar el contenido previo del carrito
  cartItemsElement.innerHTML = '';

 

  // Recorrer la lista de productos en el carrito y actualizar la interfaz de usuario
  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className="lista-carrito";
    listItem.textContent = `${item.name} - $${item.price} \n`;
    cartItemsElement.appendChild(listItem);
    total += item.price;
  });

  // Actualizar el total del carrito
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}


// Función para enviar el pedido por WhatsApp
function sendOrder() {

  // Formar el mensaje del pedido
  let mensajePedido = `Pedido:\n `;
  cart.forEach(item => {
     mensajePedido += `${item.name} - $${item.price}\n `   
     
  });
 
 

  // Enviar el pedido a través de WhatsApp
  const numeroWhatsApp = '2364265933'; // Reemplaza con tu número de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');

}



