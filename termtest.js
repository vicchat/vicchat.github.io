var ffdhgejetiiiishhlweksjfdncoexrmlshgjdhsceemf = true;

var cftdstyle = document.createElement("link");
	cftdstyle.setAttribute("rel", "stylesheet");
	cftdstyle.setAttribute("href", "https://vicchat.github.io/td.css");
document.querySelector("head").appendChild(cftdstyle);

var cftd = document.createElement("div");
	cftd.setAttribute("id", "cftd");
	cftd.innerHTML = `
		<div id="cftdbkg"></div>
		<div id="cftdinn">
			<h1>Welcome to vicchat.github.io!</h1>
			<br><br>
			We have new terms of service that you need to read in order to use this site from now on (But don't worry, they're not too long). Please have a look at them, and return to this page later once you have accepted. If you do not agree, please do not accept. Thank you!
			<br><br><br><br><br><br>
			<button onclick="window.location.href = 'https://vicchat.github.io/terms';">Review Terms</button>
		</div>
	`;
document.body.appendChild(cftd);

if (window.localStorage.getItem("cftd") === null) {
	console.log("terms need to be accepted i guess...");
} else if (window.localStorage.getItem("cftd") === true) {
	document.getElementById("cftd").style.display = "none";
}

var cftdac = function() {
	window.localStorage.setItem("cftd", true);
	window.history.back();
}
