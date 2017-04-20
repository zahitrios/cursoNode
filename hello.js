var http = require("http");

var servidor = http.createServer(function (solicitud, respuesta){
	console.log("Hola mundo");
	respuesta.end("hello in the browser");
});

servidor.listen(8080);