var request = require("request");

window.onload = (function(){
	var button = document.getElementById("button");
	button.onClick = click;
});

function click() {
	request({
		uri: "http://localhost:8888/?foo=bar",
		method: "GET",
		timeout: 10000
	}, function (error, response, body){
		console.log(body);
	})
}