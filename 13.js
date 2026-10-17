const NombreProductoInput = document.querySelector("#nombre");
const precioInput = document.querySelector("#precio");
const boton = document.querySelector("#btnAgregar");
const contenedor = document.querySelector("#productos");

boton.addEventListener("click", function () {


    const nombre = NombreProductoInput.value;
    const precio = precioInput.value;

    const caja = document.createElement("div");
    caja.classList.add("caja");

    const textoNombre = document.createElement("h2");
    textoNombre.textContent = nombre;

    const textoPrecio = document.createElement("p");
    textoPrecio.textContent = precio;

    caja.appendChild(textoNombre);
    caja.appendChild(textoPrecio);

    contenedor.appendChild(caja);

    NombreProductoInput.value = "";
    precioInput.value = "";
    
    const botonEliminar = document.querySelector("#eliminar");

botonEliminar.addEventListener("click", function () {
    caja.remove();
});
});
