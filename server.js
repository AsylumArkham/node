var http = require("http");
var url = require("url");

function start(route, handle) {

    var f = function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("\n** Request for "+ pathname + " received.");

        route(handle, pathname, response, request);
    }

    http.createServer(f).listen(8888);
	console.log("This is the current version from MacBook");
    console.log("Server has started in port 8888...");
}

exports.start = start;
