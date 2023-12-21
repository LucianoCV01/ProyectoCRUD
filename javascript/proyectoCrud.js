let productos = crearArrayProductos();
console.log(productos);

const nombreProducto = document.getElementById("nombre");
const precioProducto = document.getElementById("precio");
const descripcionProducto = document.getElementById("descripcion");
const botonActualizar = document.getElementById("botonActualizar");

botonActualizar.addEventListener("click", (event) => {
    event.preventDefault();
    let modificarProducto = {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        descripcion: descripcionProducto.value,
    }
    
    const index = productos.findIndex(producto => producto.nombre === modificarProducto.nombre);

    if (index !== -1) {
        productos[index] = modificarProducto;
        guardarProductoLocalStorage();
    }
    else {
        console.log("Error al intentar modificar un producto");
    }
})

function guardarProductoLocalStorage() {
    localStorage.setItem("producto", JSON.stringify(productos));
}

function crearArrayProductos() {
    let productos = JSON.parse(localStorage.getItem("producto"));
    if (productos == null) {
        productos = [];
        return productos;
    }
    return productos;
}