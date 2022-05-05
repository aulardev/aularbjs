class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const alimento = new Producto(1, "alimento", 900)
const comedero = new Producto(2, "comedero", 400)
const snacks = new Producto(3, "snacks", 500)
const pipetas = new Producto(4, "pipetas", 350)
const piedras = new Producto(5, "piedras", 200)
const camas = new Producto(6, "camas", 5000)


const productos = [alimento, comedero, snacks, pipetas, piedras, camas]

let divProductos = document.getElementById("divProductos")

productos.forEach(productoEnArray => {
    divProductos.innerHTML += ` 
   
 <div class="card ProductosArray" id="producto${productoEnArray.id}" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Alimento</h5>
          <p> Nombre: ${productoEnArray.nombre}  <p/>
          <p> Precio:$ ${productoEnArray.precio}  <p/>
      </div>
 </div>
    `
})

/*

const carrito = [];

let productoElegido;

const container = document.querySelector(".container");

// function saludo(){}

const saludar = () => {
    alert("Hola! Bienvenido a Intermascota")
    let nombre = prompt("Ingrese su nombre")
    while (!isNaN(nombre)) {
        nombre = prompt("Ingrese correctamente su nombre")
    }
    container.innerHTML = `<h1>Bienvenido ${nombre.toUpperCase()}</h1>`
};

const consultarProductos = () => {
    let texto = "";
    for (const p of productos) {
        texto += `${p.id}) ${p.nombre}\n`;
    }
    let prod = parseInt(prompt(`Que producto quiere llevar? :\n${texto} `));

    while (prod >6 || prod < 1 || isNaN(prod)) {
        prod = parseInt(prompt(`Que producto quiere llevar? :\n${texto} `));
    }

    return prod;
};

const llevarProducto = () => {
    let buscarProducto = productos.find(
        (element) => element.id === productoElegido
    );

    let existe = carrito.some((element) => element.id === productoElegido);

    if (existe) {
        buscarProducto.cantidad++;
    } else {
        buscarProducto.cantidad = 1;
        carrito.push(buscarProducto);
    }


    const seguir = confirm("Quiere agregar otro producto?")

    if (seguir) {
        productoElegido = consultarProductos();
        llevarProducto();
    }
};

saludar();
productoElegido = consultarProductos();
llevarProducto();

*/








