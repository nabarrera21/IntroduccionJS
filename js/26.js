// this HACE REFERENCIA AL MISMO OBJETO

const reservacion = {
    nombre: "Noel",
    apelledio: "Barrera",
    total: 5000,
    pagado: false
    informacion: function(){
        console.log(`El cliente ${this.nombrebre} reservo y su cantidad a pagar es de ${this.total} `)
    }
}

const reservacion2 = {
    nombre: "Noel",
    apelledio: "Barrera",
    total: 5000,
    pagado: false
    informacion: function(){
        console.log(`El cliente ${this.nombrebre} reservo y su cantidad a pagar es de ${this.total} `)
    }
}


reservacion.informacion;
reservacion2.informacion;