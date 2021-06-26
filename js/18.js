//declaracion de funcion

function sumar(numero1=0,numero2=0){
    console.log(numero1+numero2);
}

sumar(10,10); //argumentos o valores reales
sumar(3,3);
sumar(3,6);
sumar(1,2);

//expresion de la funcion
const sumar2 = function(numero1,numero2){
    console.log(numero1+numero2);
}
sumar2(5,10);