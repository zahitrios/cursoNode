var http=require("http");
var fs=require("fs");
var functionsZht=require("./functions.js");

var paramParser=functionsZht.paramParser;
var renderHtml=functionsZht.renderHtml;

http.createServer(function (req,res){

	if(req.url.indexOf("favicon")>0){return;}
	
	fs.readFile("./index.html",function(err,html){

		res.writeHead(200,{"Content-Type":"text/html"});
		
		var html_string=html.toString();		
		var parametros = paramParser(req);			
		
		res.write(renderHtml(html_string,parametros));
		res.end();
	})

}).listen(8080);