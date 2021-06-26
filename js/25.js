const carrito = [
    {nombre: "Monitor de 20 Pulg", precio: 900 },
    {nombre: "Televisor 50 pulg", precio: 1200 },
    {nombre: "tablet", precio: 700 },
    {nombre: "Audifonos", precio: 200 },
    {nombre: "Teclado", precio: 150 },
    {nombre: "Celular", precio: 500 },
];
//solo se pueden ejecutar en arreglos
//ForEach
carrito.forEach(function(producto){
    console.log(producto);
});

carrito.forEach(producto => console.log(producto));

//map  si quieres crear un nuevo arreglo usa map

const arreglo2 = carrito.map(producto => (producto));
console.log(arreglo2);