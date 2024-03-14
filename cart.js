//capturo los div de cart(de HTML) en una constante
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");


const cartBtn = document.getElementById("cart-btn-h");
const cartCounter = document.getElementById("cart-counter");

const verConsola = document.getElementById("verConsola");
let totalPrecio;




const displayCart = () =>{
    //cada vez que se ejecute la funcion va a limpiar apra que no se dupliquen los elementos
    modalContainer.innerHTML = "";

    //Al iniciar la pagina el carrito no se ve, pero quiero que se vea cuando rpeciono el boton carrito
    //para ello debo cambiar la propiedad de display(en css) de none a block
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        cart = [];
        
        totalPrecio = 0;
        removedPrecios = 0;
        removedPrice = 0;
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    if (cart.length > 0){
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class = "product">
           <div class = "product-info">
             <h4>${product.name}</h4>
           </div>
           <div class="price">$${product.price}</div>
           <div class = "delete-product">✖️​</div>
        </div>
        `;
        modalContainer.append(modalBody);

        //Funcion del boton de eliminar producto
        //Capturo el boton:
        const deleteProduct = modalBody.querySelector(".delete-product");

        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });
    });

    //modal footer
 
    // Función para calcular el total de los precios
    function calcularTotal(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
    }
    
    // Calcular el total de los precios
    totalPrecio = calcularTotal(cart); 
    
    
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class = "total-price" id = "button-checkout">Total: $${totalPrecio} </div>

    <section class="metodo" id="sala-ubicacion">
    <h4>METODO DE ENTREGA</h4>
    <select id="sala" onchange="actualizarTotal()"> 
        <option value="Retiro">Retiro en Local</option>
        <option value="*Tarifa de envio incluida en el Total \n ----------------------------------\nEnvio a:">Envio a Domicilio</option>
    </select>
    
    <br>
    
    <input type="text" id="ubicacion" placeholder="Nombre | Direccion de envio">

    </section>

    <section class="metodo-pago" id="metodo-pago">
    <h4>METODO  DE PAGO</h4>
    <select id="pago" > 
        <option value="Pago en Efectivo">Efectivo</option>
        <option value="Realiza el pago mediante Transferencia al siguiente ALIAS: \n ELMALTES.JUNIN \n Por favor compartartir el comprobante de pago.">Transferencia</option>
        <option value="Aguarde y se le generara un condigo QR para realizar el pago.\n Por favor, compartir el comprobante de pago.">QR DNI - QR BNA MODO</option>
    </select>

    </section>

    <section class="hora" id="hora">
    <h4>HORA DE PEDIDO</h4>
    <select id="horapedido" > 
        <option value="AHORA">AHORA (20 MINUTOS)</option>
        <option value="19:30 Hs.">19:30 Hs.</option>
        <option value="19:40 Hs.">19:40 Hs.</option>
        <option value="19:50 Hs.">19:50 Hs.</option>
        <option value="20:00 Hs.">20:00 Hs.</option>
        <option value="20:10 Hs.">20:10 Hs.</option>
        <option value="20:20 Hs.">20:20 Hs.</option>
        <option value="20:30 Hs.">20:30 Hs.</option>
        <option value="20:40 Hs.">20:40 Hs.</option>
        <option value="20:50 Hs.">20:50 Hs.</option>
        <option value="21:00 Hs.">21:00 Hs.</option>
        <option value="21:10 Hs.">21:10 Hs.</option>
        <option value="21:20 Hs.">21:20 Hs.</option>
        <option value="21:30 Hs.">21:30 Hs.</option>
        <option value="21:40 Hs.">21:40 Hs.</option>
        <option value="21:50 Hs.">21:50 Hs.</option>
        <option value="22:00 Hs.">22:00 Hs.</option>
        <option value="22:10 Hs.">22:10 Hs.</option>
        <option value="22:20 Hs.">22:20 Hs.</option>
        <option value="22:30 Hs.">22:30 Hs.</option>
        <option value="22:40 Hs.">22:40 Hs.</option>
        <option value="22:50 Hs.">22:50 Hs.</option>
        <option value="23:00 Hs.">23:00 Hs.</option>

    </select>

    </section>

    <br>

    <button class = "btn-primary" id = "checkout-btn" onclick="sendOrder()">Enviar Pedido</button>
    <div id = "button-checkout"></div>
    `;

    

    
    modalContainer.append(modalFooter);
    
    



} else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "Su carrito esta vacio";
    modalContainer.append(modalText);
}


};

    // Definición de la función para actualizar el total
    function actualizarTotal() {
        const selectedOption = document.getElementById("sala").value;
        const ubicacionInput = document.getElementById("ubicacion");

        if (selectedOption === "*Tarifa de envio incluida en el Total \n ----------------------------------\nEnvio a:") {
            totalPrecio += 1000; // Sumar 1000 al precio total si se elige envío
        } else {
            totalPrecio -= 1000;
            // Aquí puedes revertir la suma de 1000 si es necesario
            // Por ejemplo, si eliges otra opción diferente al envío
        }

        // Actualizar el contenido del elemento HTML que muestra el precio total
        document.getElementById("button-checkout").innerHTML = `Total: $${totalPrecio}`;

        

        
    }




cartBtn.addEventListener("click", displayCart);



let removedPrecios = 0;
let removedPrice = 0;

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    if (foundId !== -1) {
        let removedProduct = cart[foundId];
        removedPrice = removedProduct.price; // Restar el precio del producto eliminado de 'envio'
        console.log(removedPrice);
        removedPrecios += removedPrice;
        cart.splice(foundId, 1);
        displayCart(); // Actualizar la visualización del carrito
        //return removedPrecios;
    } else {
        console.log("El producto no se encontró en el carrito.");
    }   
};



//const displayCartCounter = () => {
//    const cartLength = cart.reduce((acc, el) => acc + el.quantity, 0);
//    if (cartLength > 0) {
//        cartCounter.style.display = "block";
//        cartCounter.innerText = cartLength;
//    }else{
//        cartCounter.style.display = "none";
//    }

//};




 





