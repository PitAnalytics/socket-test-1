//dependencias
const path=require('path');
const express= require('express');
const app = express();
//configuramos puerto
app.set('port',process.env.PORT||80);
//directorio de fornt-end
app.use(express.static(path.join(__dirname,'public')));
//iniciamos servidor
const server = app.listen(app.get('port'),()=>{

    console.log('server on port', app.get('port'));

});

// instanciamos socket y lo conectamos al servidor
const SocketIO=require('socket.io');
const io =SocketIO.listen(server);

//
io.on('connection',(socket)=>{

    console.log('new connection',socket.id);

    socket.on('conexion',(data)=>{

        console.log(data);

        io.sockets.emit('conexion',data);

    });

});

