var http=require("http"),
	fs=require("fs");


http.createServer(function (req,res){

	if(req.url.indexOf("favicon")>0){return;}
	
	fs.readFile("./index.html",function(err,html){
		res.writeHead(200,{"Content-Type":"text/html"});
		var arreglo_parametros=[];
		var parametros={};
		var html_string=html.toString();
		var variables=html_string.match(/[^\{\}]+(?=\})/g);

		if(req.url.indexOf("?")>0)
		{
			var urlData=req.url.split("?");
			urlData=urlData[1];
			arreglo_parametros=urlData.split("&");			
		}

		for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
			var parametro=arreglo_parametros[i];
			var param_data=parametro.split("=");
			parametros[param_data[0]]=param_data[1];
		}

		console.log(parametros);
		

		for (var i = variables.length - 1; i >= 0; i--) {
			html_string=html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
		}

		
		res.write(html_string);
		res.end();
	})

}).listen(8080);