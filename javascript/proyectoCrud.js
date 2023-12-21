let productos = crearArrayProductos();
const perros = [];
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
    if (productos.find(element => element.nombre == producto.nombre))
         console.log("Este producto ya se encuentra");
    else{
        productos.push(producto);
        guardarProductoLocalStorage();
    }
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