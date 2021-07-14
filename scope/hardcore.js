enterMode = true;
cheatmode = false;

document.getElementsByTagName("title")[0].innerHTML = "The Random Puffy Thingy and the Big Scary Void HARDCORE";

var menus1 = document.getElementsByClassName("menu");

var spbt = document.getElementsByTagName("button")[10];
spbt.innerHTML = "Spectator Mode";
spbt.onclick = function() {
	window.setInterval(function() {
		drawMode(false);
		puffyThingy.style.display = "none";
		invincible = true;
		spectator = true;
		youDied.style.display = "none";
	}, 10);
	resume();
	window.setTimeout(function() {
		resume();
	}, 500);
}

logChatMessage("system", "Welcome to HARDCORE MODE! Not too interesting in this version, but just try not to go off the platform (or press F7). You cannot use commands. Other than that, this works exactly the same!");
