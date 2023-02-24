
//capturas:
const contenedorProductos = document.getElementById(`contenedorProductos`)
const btnBuscador = document.getElementById (`btnBuscador`)
const buscador = document.getElementById ("buscador")
const carritoContenedor = document.getElementById (`carritoContenedor`)
const botonVaciar = document.getElementById (`vaciarCarrito`)
const contador = document.getElementById (`contador`)
const precioTotal = document.getElementById (`precioTotal`)




botonVaciar.addEventListener(`click`, () => {
    carrito. length  = 0
    actualizarCarrito ()
})


const stockProductos = [
    {
    id: 1,
    nombre:"Indio Solari",  
    modelo:"huevito",
    diseño: "rock - indio",
    cantidad: 1,
    precio:2500, 
    imagen:"./images/indio.jpg",
    },
{
    id:2,
    nombre: "Boca - Riquelme",
    modelo:"hexagonal", 
    diseño:"boca", 
    cantidad: 1,
    precio:2900,
    imagen:"./images/boca.jpg",
    },
{
    id:3,
    nombre: "Naruto", 
    modelo:"hexagonal",
    diseño: "Anime",
    cantidad: 1,
    precio: 2900,
    imagen: "./images/anime.jpg",
        },
{
    id: 4,
    nombre: "River Plate", 
    modelo:"huevito", 
    diseño:"Escudo de river", 
    cantidad: 1,
    precio:2300,
    imagen: "./images/river.jpg",
        },
{
    id: 5,
    nombre:"Flores",
    modelo: "hexagonal",
    diseño: "flores blancas",
    cantidad: 1,
    precio:2500,
    imagen:  "./images/flores.jpg",
    },
{
    id: 6,
    nombre:"Cactus",
    modelo: "huevito",
    diseño: "cactus",
    cantidad: 1,
    precio: 2600,
    imagen: "./images/cactus.png",
    },
{
    id: 7,
    nombre:"Escudo futbol",
    modelo: "hexagonal",
    diseño: "independiente",
    cantidad: 1,
    precio: 2300,
    imagen: "./images/independiente.jpg",
    },
{
    id: 8,
    nombre:"Dibujo animado",
    modelo: "hexagonal",
    diseño: "Stich",
    cantidad: 1,
    precio: 2600,
    imagen: "./images/stich.jpg",
    }
];



let carrito = []

document.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem (`carrito`)){
        carrito = JSON.parse(localStorage.getItem (`carrito`))
        actualizarCarrito()
    }
})

    stockProductos.forEach  ((producto) => {
        const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <div id="${producto.id}"  class="card") style="width: 16rem;">
    <div class="card-img-top img-fluid">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Modelo: ${producto.modelo}</p>
            <p class="card-title" "precioProducto> Precio  ${producto.precio}</p>            
            <button id="agregar${producto.id}" class="btn btn-primary" class="botonAgregar">Agregar al carrito</button>
</div>`

contenedorProductos.appendChild(div)

const boton =  document.getElementById (`agregar${producto.id}`)

boton.addEventListener(`click`, () => {
    agregarAlCarrito(producto.id)
    
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId) 
    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
    
    const item = stockProductos.find((prod) => prod.id === prodId)
    
    carrito.push(item)
}
actualizarCarrito() 
}

function eliminarDelCArrito  (prodId) {
    const item = carrito.find((producto) => producto.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice,1)
    actualizarCarrito()
    console.log(carrito)

}

const actualizarCarrito = () => {
    carritoContenedor.innerHTML = ""


    carrito.forEach ((producto)=>{
        const div = document.createElement (`div`)
        div.className = (`productoEnCarrito`)
        div.innerHTML =`
        <div>
        <img class="img-fluid imgCarrito" src="${producto.imagen}" alt="...">
        </div>
        <div>
        <p>Nombre: ${producto.nombre}</p>
        <p>Modelo: ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick = "eliminarDelCArrito(${producto.id})" class ="botonEliminar">
        <i class="fas fa-trash-alt"></i></button>
        </div>`

        carritoContenedor.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))


        
})
contador.innerText = carrito.length
precioTotal.innerHTML = carrito.reduce ((acc,producto) => acc + producto.precio, 0)
}








