//for loop
for(let i=0; i < 10; i++){
    console.log(i);
}

for(let i=0; i <= 100; i++){
    if(i %2===0){
        console.log(`El numero ${i} es par `);
    }else{
        console.log(`El numero ${i} es inpar `);

    }
}

const carrito = [
    {nombre: "Monitor de 20 Pulg", precio: 900 },
    {nombre: "Televisor 50 pulg", precio: 1200 },
    {nombre: "tablet", precio: 700 },
    {nombre: "Audifonos", precio: 200 },
    {nombre: "Teclado", precio: 150 },
    {nombre: "Celular", precio: 500 },
];

for (let i = 0; i<carrito.length; i++ ){
    console.log(carrito[i].nombre);
}







//while loop  se ejecuta si la condicion se comple
let i=0; //indice
while(i<10){//condicion
    console.log(i);
    if(i % 2===0){
        console.log(`El numero ${i} es par `)
    }else{
        console.log(`El numero ${i} es inpar`)
    }


    i++;
}






//do while loop se ejecuta 1 vez aunque la condicion no se cumpla

let i=0;
do{
    console.log(i);
        i++;
} while(i<10);