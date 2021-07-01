// Async / await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes... espere...");

        setTimeout(() => {
            resolve('los clientes es cargado')
        }, 50);
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando pedidos... espere...");

        setTimeout(() => {
            resolve('los peidos es cargado')
        }, 50);
    });
}



setTimeout(function() {
    console.log('set timeout...')
}, 5000);

async function app(){
  try {
    //const resultado = await descargarNuevosClientes();
    //const pedidos = await descargarUltimosPedidos();
    //console.log(resultado);
    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
    console.log(resultado [0]);
    console.log(resultado [1]);
  }cath (error){
    console.log(error);

  }
} 
app();
    console.log('Este codigo no se bloquea');