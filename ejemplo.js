var io = require('socket.io').listen(6969);

io.sockets.on('connection', conexion);

function conexion (Recibir_de_Cliente) {
	Recibir_de_Cliente.on('cliente', Enviar_a_Cliente);
}
function Enviar_a_Cliente (Variable_a_Enviar) {
	var obj = new Date();
	var hora =  obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds();
	io.sockets.emit('servidor', {"usuario": Variable_a_Enviar.usuario, "time": hora, "mensaje": Variable_a_Enviar.mensaje});
}