// PRODUCTOS
const productos = [
//ISLAS
    {
        id: "islas-01",
        titulo: "Isla 01",
        imagen: "img/islas/Screenshot_20231012-212710-003.png",
        categoria: {
            nombre: "Islas",
            id: "Islas"
        },
        precio: 500000
    },
    {
        id: "isla-02",
        titulo: "Isla 02",
        imagen: "img/islas/isla_2.png",
        categoria: {
            nombre: "Islas",
            id: "Islas"
        },
        precio: 390000
    },
    {
        id: "Isla-03",
        titulo: "Isla 03",
        imagen: "img/islas/Isla_3.png",
        categoria: {
            nombre: "islas",
            id: "Islas"
        },
        precio: 540000
    },
    {
        id: "Isla-04",
        titulo: "Isla 04",
        imagen: "img/islas/isla 4.png",
        categoria: {
            nombre: "Islas",
            id: "Islas"
        },
        precio: 500000
    },
    {
        id: "Isla-05",
        titulo: "Isla 05",
        imagen: "img/islas/isla 5.png",
        categoria: {
            nombre: "Isla",
            id: "Isla"
        },
        precio: 7000000
    },
    // MESAS
    {
        id: "mesas-01",
        titulo: "Mesas 01",
        imagen: "img/MESAS/mesa 01.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 1000000
    },
    {
        id: "mesas-02",
        titulo: "Mesas 02",
        imagen: "img/MESAS/mesa 02.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 1200000
    },
    {
        id: "mesas-03",
        titulo: "Mesas 03",
        imagen: "img/MESAS/mesa 03.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 999000
    },
    {
        id: "mesas-04",
        titulo: "Mesas 04",
        imagen: "img/MESAS/mesa 04.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 700000
    },
    {
        id: "mesas-05",
        titulo: "Mesas 05",
        imagen: "img/MESAS/mesa 05.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 800000
    },
    {
        id: "mesas-06",
        titulo: "Mesas 06",
        imagen: "img/MESAS/mesa 06.png",
        categoria: {
            nombre: "Mesas",
            id: "Mesas"
        },
        precio: 1030000
    },
                                                       // Oficina
    {
        id: "Escritorio-01",
        titulo: "Escritorio 01",
        imagen: "img/Oficina/Escritorio01.png",
        categoria: {
            nombre: "Oficina",
            id: "Oficina"
        },
        precio: 130000
    },
    {
        id: "Escritorio-02",
        titulo: "Escritorio 02",
        imagen: "img/Oficina/Escritorio02.png",
        categoria: {
            nombre: "Oficina",
            id: "Oficina"
        },
        precio: 130000
    },
    {
        id: "Escritorio-03",
        titulo: "Escritorio 03",
        imagen: "img/Oficina/Screenshot_20231012-222328-616.png",
        categoria: {
            nombre: "Oficina",
            id: "Oficina"
        },
        precio: 125000
    },
                                                                       // MESAS RATONAS 
    {
        id: "Mesa-ratona01",
        titulo: "Mesa ratona 01",
        imagen: "img/Mesita ratona/mesita-ratona01.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 17000
    },
    {
        id: "Mesa-ratona02",
        titulo: "Mesa ratona 02",
        imagen: "img/Mesita ratona/ratona02.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 17000
    },  {
        id: "Mesa-ratona03",
        titulo: "Mesa ratona 03",
        imagen: "img/Mesita ratona/ratona03.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 80000
    },  {
        id: "Mesa-ratona04",
        titulo: "Mesa ratona 04",
        imagen: "img/Mesita ratona/ratona04.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 40000
    },  {
        id: "Mesa-ratona05",
        titulo: "Mesa ratona 05",
        imagen: "img/Mesita ratona/ratona05.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 47000
    },  {
        id: "Mesa-ratona06",
        titulo: "Mesa ratona 06",
        imagen: "img/Mesita ratona/ratona06.png",
        categoria: {
            nombre: "Mesa-ratonas",
            id: "Mesa-ratonas"
        },
        precio: 19000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}