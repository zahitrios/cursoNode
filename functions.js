function paramParser(req)
{
	var arreglo_parametros=[];
	var parametros={};

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

	return parametros;

}

function renderHtml(html_string, parametros)
{
	var variables=html_string.match(/[^\{\}]+(?=\})/g);

	for (var i = variables.length - 1; i >= 0; i--) {
		html_string=html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
	}

	return html_string;
}


module.exports.renderHtml = renderHtml;
module.exports.paramParser = paramParser;