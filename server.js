var http = require("http");
var url = require("url");

function start(route, handle) {

    var f = function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        console.log("** Request for "+ pathname + " received. Parameters: " + query);
        
        var content = route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world!\n");
        response.write("You made the following request: " + request.url + "\n");
        response.write("Analizing it: pathname = " + pathname + " -and- query = " + query);
        
        response.write(content);
        response.end();
    }

    http.createServer(f).listen(8888);
    console.log("My server is running in localhost:8888/");

}

exports.start = start;
