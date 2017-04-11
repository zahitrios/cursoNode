var http = require("http");

var manejador = function (solicitud, respuesta){
	console.log("Hola mundo");
	respuesta.end("hello in the browser");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);