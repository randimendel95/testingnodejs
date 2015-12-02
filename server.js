var http = require("http");
var url = require("url");
var fs = require("fs");
var request = require("request");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");  
    var params = url.parse(request.url, true).query;
  	console.log(params);
      if (params["foo"] == "bar") {
  		printfile(response);
 	 }
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

function printfile(response) {
	fs.readFile("test.txt", {encoding: 'utf-8'}, function(err,data){
    if (!err){
    	console.log('received data: ' + data);

    }else{
        console.log(err);
    }

});
}
exports.start = start;