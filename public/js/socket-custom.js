var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion al servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    user: 'Sergio',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar informacion 

socket.on('enviarMensaje', function(message) {
    console.log('Servidor ', message)
})