//notificacion API
const boton = document.querySelector("#boton");
boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resuldado=> console.log(`El resulda es ${resuldado}`))
});

if(Notification.permission =='granted'){
    new Notification('Esta es una notificacion', {
    icon: 'img/ccj.png',
    body: 'Codigo con Noel, los mejores tutoriales'
    })
}