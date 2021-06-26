// programacion orientada a objetos

//objet literal
const producto = {
    nombre: "tablet",
    precio: 500
}

//Objet Constructor
function Producto(nombre,precio){
    this.nombre= nombre;
    this.precio= precio;
}

const producto2 =  new Producto("monitor curso de 49 pung",800);
const producto3 =  new Producto("laptop",300);


function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene el precio de ${producto.precio}`
}


console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));

// crear funciones que solo se utliizarn en un obejto en especifico

Producto.prototype.formatearProducto=function(){
    resturn `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}