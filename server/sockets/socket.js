const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Administrador',
        message: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* if (message.user) {
            callback({
                resp: 'TODO SALIO  BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO  MALL!'
            });
        } */
    })
});