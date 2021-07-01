//promises

const usuarioAutenticado = new Promise(()=>{
    const auth = true;

    if(auth){
        resolve();//el promise se cumple
    }else{
        PromiseRejectionEvent();//el promises no se cumple
    }
});

console.log(usuarioAutenticado);

//en los promises existen 3 valores posibles

//pending : no se ha cumplico pero tambpo rechazado

//Fulfilled : ya se cumplo
//reeject no se enue se sufrido

usuarioAutenticado
    .then((function(){
            console.log(resultado){

            })