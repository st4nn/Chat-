var user = io.connect("http://192.168.1.153:6969");
user.on('servidor', ejecutar_rta_servidor);
$(document).on("ready", arranque);

function arranque()
{
	$("#btnPrevisualizar").on("submit", btn_Previsualizar);
}
function btn_Previsualizar(evento)
{
	evento.preventDefault();
	user.emit("cliente", {"usuario": $("#txtUsuario").val(), "mensaje" : $("#txtObj").val()});
	$("#txtObj").val("");
}
function ejecutar_rta_servidor(Variable_Recibida)
{
	//console.log(Variable_Recibida);
	if ($("#txtTexto").val())
	{
		$("#txtTexto").val($("#txtTexto").val() + '\n' + Variable_Recibida.usuario + ' dice: \n' + Variable_Recibida.time + ': ' + Variable_Recibida.mensaje);
	}	else
	{
		$("#txtTexto").val(Variable_Recibida.usuario + ' dice: \n' + Variable_Recibida.time + ': ' + Variable_Recibida.mensaje);
	}
	var chat = document.getElementById('txtTexto');
	chat.scrollTop = chat.scrollHeight - chat.clientHeight;  
}