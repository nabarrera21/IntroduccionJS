// metodo de propiedad

const reproductor={
    reproducir: function(id){
        console.log(`Reproduciendo Cancion con el ID:${id}`);
    },
    pausar: function(){
        console.log("Pausando")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducir.borrarCancion=function(id){
        console.log(`Elimando la cancion: ${id}`)
    }
}
reproductor.borrarCancion= function(id){
    console.log(`Eliminando la cancion: ${id} `)
}

reproductor.reproducir(2840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
