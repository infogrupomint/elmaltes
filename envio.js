
let envio = 0;

function actualizarTotal() {
    const sala = document.getElementById("sala");
    const ubicacion = document.getElementById("ubicacion");
    
    if (sala.value === "*Tarifa de envio incluida en el Total \n ----------------------------------\nEnvio a:") {
        envio += 1000;
    } else {envio -= 1000};
    
    document.getElementById("button-checkout").innerText = "Total: $" + envio;
    document.getElementById("detalleEnvio").innerText = "Envio $1000";
}
