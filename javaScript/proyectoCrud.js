// let main = document.querySelector("main")
let lista = document.querySelector("ul")
const leerProductos = () =>
{
    let arreglo = JSON.parse(localStorage.getItem("productos"))
    for (let j = 0; j < arreglo.length; j++) {
        let li = document.createElement("li")
        li.textContent = arreglo[j].nombre +  ": " + arreglo[j].descripcion + ", " + " $" + arreglo[j].precio
        lista.appendChild(li) + " el kilo"
    }
}

// let eso = [{nombre: "manzana", descripcion: "rojas y moradas", precio: 1000}, {nombre: "durazno", descripcion: "si te gusta el durazno bancate la pelusa", precio: 1500}]

leerProductos(eso)