//clases

class Producto {
    constructor(nombre,precio){
        this.nombre= nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ {this.precio}`;
    }
}

const producto = new Producto();


const producto2 =  new Producto("monitor curso de 49 pung",800);
const producto3 =  new Producto("laptop",300);

console.log(producto2);
console.log(depoteri26
    )

//herencia
class Libro extends Producto {
    constructor (nombre, precio, isbn){
        super(nombre, precio);
        this.isbn=isbn;    
    }
}
