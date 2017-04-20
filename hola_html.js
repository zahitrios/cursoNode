var http=require("http"), 
	fs=require("fs");


http.createServer(function (req,res){

	fs.readFile("./index.html",function(err,html){
		res.writeHead(404,{"Content-Type":"application/json"});

		var variableJson={nombre:"zahit",user:"elzah"};
		res.write(JSON.stringify(variableJson));

		// for (var i = 0; i <= 20; i++) {
		// 	res.write("a"+i+"\n");	
		// }

		res.end();
	});


	

		
}).listen(8080);
