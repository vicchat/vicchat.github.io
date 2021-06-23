enterMode = true;
chat.style.background = "black";
chatMessage.style.background = "black";
background.style.background = "black";
if (version !== "1.2.2") {
	openMenu("<h1>Warning:</h1>This version is meant for 1.2.2. Please switch to this version for a better experience.");
}

var food = 0;

logChatMessage("system", "<span style='color: turquoise'>Click Starve to Begin!</span><br><span style='color: white;'><ins id=sta>Starve</ins></span> <span onclick='window.location.reload();' style='color: black;'><ins>No</ins></span>");
id("sta").onclick = function() {
	clearChat();
	logChatMessage("for", "Oh! Hello! Thank you for clicking start and not just clicking no!", "", "turquoise");
	logChatMessage("for", "Anyways, what to do today?", "", "turquoise");
	logChatMessage("for", "<ins id=con>I don't know</ins>", "", "white");
	id("con").onclick = function() {
		clearChat();
		logChatMessage("for", "Of cource you don't know! You didn't make this library! You look hungry. Click get food to get food.", "", "turquoise");
		logChatMessage("for", "<ins id=foo>Get Food</ins>", "", "white");
		id("foo").onclick = function() {
			logChatMessage("for", "Getting Food...", "", "turquoise");
			resume();
			closeChat();
			food++;
			window.setTimeout(function() {
				openMenu("<h1>Yay!</h1>You just got food!<br><br>You have " + food + " food!<br><br><br><br><button onclick='resume();'>Goodbye</button>");
			}, 600);
		}
	}
}

var you_died = function(how_you_died) {
	if (invincible === false) {
		if (youDied.style.display === "none") {
			logChatMessage("system", "The Random Puffy Thingy lost all it's food");
		}
		document.exitPointerLock();
		giveon2();
		document.getElementById("how-you-died").textContent = "Food: " + food;
		youDied.style.display = "block";
	}
}
var respawn = function() {
	ax = 50;
	ay = 50;
	playerX = 50;
	playerY = 50;
	area.style.left = ax + "px";
	area.style.top = ay + "px";
	puffyThingy.style.left = playerX + "px";
	puffyThingy.style.top = playerY + "px";
	youDied.style.display = "none";
	area.requestPointerLock();
	food = 0;
}
