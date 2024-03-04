// Datos de ejemplo de productos agrupados por categorías
const categories = ['Pizzas', 'Empanadas', 'Canastitas', 'Sandwiches'];

const products = {
  'Pizzas': [
    { name: 'P. Muzzarella', price: 5000,img:"pizza.png"},
    { name: 'P. Especial', price: 7200 },
    { name: 'P. Cebolla', price: 6500 },
    { name: 'P. Napolitana', price: 7500 },
    { name: 'P. Capresse', price: 6500 },
    { name: 'P. Papas Fritas', price: 7200 },
    { name: 'P. Fritas c/Salame', price: 7200 },
    { name: 'P. Provolone c/Jamon', price: 7500 },
    { name: 'P. Calabresa', price: 5700 },
    { name: 'P. Rucula c/ Parmesano', price: 7200 },
    { name: 'P. Rucula c/ Crudo', price: 7500 },
    { name: 'P. Palmitos', price: 7500 },
    { name: 'P. Choclo', price: 7500 },
    { name: 'P. Panceta', price: 7500 },
    { name: 'P. Anana c/ Jamon', price: 7500 },
    { name: 'P. Pollo', price: 7500 },
    { name: 'P. Roquefort', price: 7500 },
    { name: 'P. 4 Quesos', price: 7500 },
    { name: 'P. Anchoas', price: 7500 },
    { name: 'P. Veranito', price: 7500 },
    { name: 'P. S.O.S', price: 7500 },
    { name: 'P. Cordoba', price: 7500 },

  ],
  'Empanadas': [
    { name: 'E. de Carne', price: 850 },
    { name: 'E. de Pollo', price: 850 },
    { name: 'E. de Jamon y Queso', price: 850 },
    { name: 'E. de Choclo', price: 850 },
    { name: 'E. de Cebolla', price: 850 },
    { name: 'E. de Verdura', price: 850 },
  ],
  'Canastitas': [
    { name: 'C. Capresse', price: 950 },
    { name: 'C. Panceta y Cebolla', price: 950 },
    { name: 'C. Roquefort y Nuez', price: 950 },
    { name: 'C. Atun', price: 950 },
  ],
  'Sandwiches': [
    { name: 'Milanesa c/ Fritas', price: 3500 },
    { name: 'Hamburguesa c/ Fritas', price: 4000 },
    { name: 'Lomo c/ Fritas', price: 5700 },
    { name: 'Lomopizza', price: 20000 },
    { name: 'Porcion Papas Fritas', price: 2200 },
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
    <h3>${product.name}</h3>
    <div class="details">
      <p>$${product.price}</p>
      <button class="btnAgregarCarrito" onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
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
  let mensajePedido = `Pedido:\n  ` ;
  cart.forEach(item => {
     mensajePedido += `${item.name} - $${item.price}\n `   
     
  });
 
 

  // Enviar el pedido a través de WhatsApp
  const numeroWhatsApp = '2364265933'; // Reemplaza con tu número de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');

}



