var options = document.getElementById("trns-api");
var usrInput = document.getElementById("usr-input");
var btn = document.getElementById("submit");
var showOutput = document.getElementById("result");

function setAPI() {
	var api = "https://api.funtranslations.com/translate/";
	if (options.value === "pirates") {
		api += "pirate.json";
	} else if (options.value === "groot") {
		api += "groot.json";
	} else if (options.value === "navi") {
		api += "navi.json";
	} else {
		api += "yoda.json";
	}
	return api;
}

function serveAPI(api, input) {
	return api + "?text=" + input;
}

function errorHandling(error) {
	console.log("An error occured", error);
	alert("Something went wrong..! Please try again.");
}

function clickHandler() {
	var input = usrInput.value;
	api = setAPI();
	fetch(serveAPI(api, input))
		.then((response) => response.json())
		.then((json) => (showOutput.innerText = json.contents.translated))
		.catch(errorHandling);
}

btn.addEventListener("click", clickHandler)
