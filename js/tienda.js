const section = document.querySelector(".section-articulos");

const requestURL = "https://fakestoreapi.com/products";

const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    const productos = request.response;
    pintarProductos(productos);
}

function pintarProductos(productos) {
    for(const producto of productos) {
        const articulo = document.createElement('article');

        const img = document.createElement('img');
        img.src = producto.image;
        img.alt = producto.title;

        const titulo = document.createElement('h4');
        titulo.textContent = producto.title;

        const precio = document.createElement('p');
        const rnd = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio entre 1 y 3
        if (rnd === 1) {
            //precio.className = 'texto-parpadeante';
            precio.className = 'texto-parpadeante-opacidad';
            precio.textContent = "¡¡¡ O f e r t a !!!  $" + producto.price;
        }else{
            precio.className = 'precio';
            precio.textContent = "$ " + producto.price;
        }

        const desc = document.createElement('p');
        desc.textContent = producto.description;
        desc.className = 'descripcion';

        const botonComprar = document.createElement('button');
        botonComprar.innerText = "Comprar";

        articulo.appendChild(img);

        articulo.appendChild(titulo);
        articulo.appendChild(precio);
        articulo.appendChild(desc);
        articulo.appendChild(botonComprar);

        section.appendChild(articulo);

    }
}

