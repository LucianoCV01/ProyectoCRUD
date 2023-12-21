let productos = crearArrayProductos();
console.log(productos);

const nombreProducto = document.getElementById("nombre");
const precioProducto = document.getElementById("precio");
const descripcionProducto = document.getElementById("descripcion");
const botonAgregar = document.getElementById("botonAgregar");

botonAgregar.addEventListener("click",(event)=>{
    event.preventDefault();
    let producto = {
             nombre: nombreProducto.value,
             precio: precioProducto.value,
             descripcion: descripcionProducto.value,
         }
    productos.push(producto);
    guardarProductoLocalStorage();
})

function guardarProductoLocalStorage(){ 
    localStorage.setItem("producto",JSON.stringify(productos));
}
function crearArrayProductos(){
        let productos = JSON.parse(localStorage.getItem("producto"));
        if (productos == null){
            productos = [];
            return productos;
        }
        return productos;
}